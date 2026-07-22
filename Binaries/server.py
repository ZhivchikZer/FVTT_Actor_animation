import os
import sys
import json
import time
import shutil
from http.server import SimpleHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse

PORT = 3000

class CustomHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        parsed = urlparse(self.path)
        urlPath = parsed.path
        
        if urlPath == '/api/frames':
            framesDir = os.path.join(os.path.dirname(__file__), '..', 'Frames')
            os.makedirs(framesDir, exist_ok=True)
            try:
                files = os.listdir(framesDir)
                imgs = [f for f in files if f.lower().endswith(('.png', '.webp'))]
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps(imgs).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.end_headers()
                self.wfile.write(b'Error reading Frames directory')
            return
            
        if urlPath.startswith('/Frames/'):
            from urllib.parse import unquote
            import mimetypes
            decoded_path = unquote(urlPath)
            real_path = os.path.join(os.path.dirname(__file__), '..', decoded_path.lstrip('/'))
            if os.path.exists(real_path) and not os.path.isdir(real_path):
                self.send_response(200)
                content_type = mimetypes.guess_type(real_path)[0] or 'application/octet-stream'
                self.send_header('Content-Type', content_type)
                self.end_headers()
                with open(real_path, 'rb') as f:
                    self.wfile.write(f.read())
                return
            else:
                self.send_response(404)
                self.end_headers()
                return

        return super().do_GET()

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path == '/upload':
            testDir = os.path.join(os.path.dirname(__file__), '..', 'TEST')
            os.makedirs(testDir, exist_ok=True)
            
            file_name = f"trimmed_{int(time.time()*1000)}.mp4"
            file_path = os.path.join(testDir, file_name)
            
            length = int(self.headers.get('content-length', 0))
            if length > 0:
                with open(file_path, 'wb') as f:
                    f.write(self.rfile.read(length))
                
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({"success": True, "fileName": file_name}).encode('utf-8'))
            else:
                self.send_response(400)
                self.end_headers()
            return
            
        self.send_response(501)
        self.end_headers()
        self.wfile.write(b"Unsupported POST path")

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer

if __name__ == '__main__':
    # Change working directory to Binaries so static files serve correctly
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    server_address = ('127.0.0.1', PORT)
    try:
        httpd = ThreadingHTTPServer(server_address, CustomHandler)
    except NameError:
        from http.server import HTTPServer
        httpd = HTTPServer(server_address, CustomHandler)
    print(f"Token Animator running at http://localhost:{PORT}")
    print("Press Ctrl+C to stop.")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
