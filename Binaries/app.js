(function () {
  'use strict';

  // ─── DOM helpers ───────────────────────────────────────────────────────────
  const $ = (id) => document.getElementById(id);
  const show = (el) => el.classList.remove('hidden');
  const hide = (el) => el.classList.add('hidden');

  // ─── DOM references ────────────────────────────────────────────────────────
  const dom = {
    statusDot:     $('statusDot'),
    statusText:    $('statusText'),
    dropzone:      $('dropzone'),
    fileInput:     $('fileInput'),
    fileBar:       $('fileBar'),
    fileBarName:   $('fileBarName'),
    fileBarSize:   $('fileBarSize'),
    btnChangeFile: $('btnChangeFile'),
    card2:         $('card2'),
    card3:         $('card3'),
    card4:         $('card4'),
    card5:         $('card5'),
    githubInput:   $('githubInput'),
    cdnOutput:     $('cdnOutput'),
    btnCopyCdn:    $('btnCopyCdn'),
    vid:           $('vid'),
    cropCanvas:    $('cropCanvas'),
    previewCanvas: $('previewCanvas'),
    cropSizeRange: $('cropSizeRange'),
    sizeValLabel:  $('sizeValLabel'),
    brushToggle:   $('brushToggle'),
    brushSettings: $('brushSettings'),
    btnBrushErase: $('btnBrushErase'),
    btnBrushRestore:$('btnBrushRestore'),
    brushSizeRange:$('brushSizeRange'),
    brushSizeLabel:$('brushSizeLabel'),
    brushOpacityRange:$('brushOpacityRange'),
    brushOpacityLabel:$('brushOpacityLabel'),
    btnBrushClear: $('btnBrushClear'),
    
    // Tabs
    tabVideo:      $('tabVideo'),
    tabFrame:      $('tabFrame'),
    tabBrush:      $('tabBrush'),
    panelVideo:    $('panelVideo'),
    panelFrame:    $('panelFrame'),
    panelBrush:    $('panelBrush'),
    modeHintText:  $('modeHintText'),
    
    bgControls:    $('bgControls'),
    bgTransparentCheck: $('bgTransparentCheck'),
    bgColorPicker: $('bgColorPicker'),
    
    frameDropzone: $('frameDropzone'),
    btnLoadFrame:  $('btnLoadFrame'),
    btnDefaultFrames: $('btnDefaultFrames'),
    framesModal:   $('framesModal'),
    framesGrid:    $('framesGrid'),
    btnCloseFramesModal: $('btnCloseFramesModal'),
    frameInput:    $('frameInput'),
    btnRemoveFrame:$('btnRemoveFrame'),
    frameNameLabel:$('frameNameLabel'),
    frameTransformControls: $('frameTransformControls'),
    frameScaleRange: $('frameScaleRange'),
    frameScaleLabel: $('frameScaleLabel'),
    frameLockRatioCheck: $('frameLockRatioCheck'),

    maskSelect:    $('maskSelect'),
    audioCheck:    $('audioCheck'),
    pingPongCheck: $('pingPongCheck'),
    speedSelect:   $('speedSelect'),
    outSizeSelect: $('outSizeSelect'),
    btnExport:     $('btnExport'),
    
    // Export Settings
    btnFormatWebm: $('btnFormatWebm'),
    btnFormatGif:  $('btnFormatGif'),
    fpsRange:      $('fpsRange'),
    fpsValLabel:   $('fpsValLabel'),
    qualitySelect: $('qualitySelect'),
    fileSizeEstimate: $('fileSizeEstimate'),

    progressBlock: $('progressBlock'),
    progressText:  $('progressText'),
    progressPct:   $('progressPct'),
    progressFill:  $('progressFill'),
    progressStage: $('progressStage'),
    successBlock:  $('successBlock'),
    successName:   $('successName'),
    btnNewFile:    $('btnNewFile'),
    
    // Language toggles
    btnLangRu:     $('btnLangRu'),
    btnLangEn:     $('btnLangEn'),
    btnExportText: $('btnExportText'),
    
    // Trim UI
    btnSelectTrimVideo: $('btnSelectTrimVideo'),
    trimInput:          $('trimInput'),
    trimUI:             $('trimUI'),
    trimVid:            $('trimVid'),
    trimStartLabel:     $('trimStartLabel'),
    trimEndLabel:       $('trimEndLabel'),
    trimStartRange:     $('trimStartRange'),
    trimEndRange:       $('trimEndRange'),
    btnSetTrimStart:    $('btnSetTrimStart'),
    btnSetTrimEnd:      $('btnSetTrimEnd'),
    trimDurationLabel:  $('trimDurationLabel'),
    btnDoTrim:          $('btnDoTrim'),
    trimProgressBlock:  $('trimProgressBlock'),
    trimProgressText:   $('trimProgressText'),
    trimProgressFill:   $('trimProgressFill'),
    
    // Frames Modal
    btnDefaultFrames:   $('btnDefaultFrames'),
    framesModal:        $('framesModal'),
    btnCloseFramesModal:$('btnCloseFramesModal'),
    framesGrid:         $('framesGrid'),
  };

  // ─── i18n Dictionary ───────────────────────────────────────────────────────
  const i18nDict = {
    ru: {
      linkDiscord: "💬 Мой Discord",
      linkDiscordDesc: "— тут я обитаю, и там есть реквизиты для донатов!",
      linkBoosty: "🔥 Boosty",
      linkBoostyDesc: "— разрабатываю революционную игру в жанре НРИ для FVTT (Vasyan-Zone)",
      statusInit: "Инициализация...",
      statusFFmpegWasm: "Загрузка FFmpeg WASM...",
      statusReady: "FFmpeg готов",
      statusError: "Ошибка: ",
      step0Title: "Подготовка материала",
      step0Desc1: "Найди или сгенерируй картинку своего персонажа в",
      step0Desc1_2: "я пользуюсь NanoBanana",
      step0Desc1_3: "или любой другой приятной нейросети.",
      step0Desc2: "Затем анимируй эту картинку в",
      step0Desc2_2: "или Google Veo 3.1",
      step0PromptTitle: "Используй этот промпт:",
      step0Prompt: "Сделай чтобы персонаж чуть двигался и моргал, это его idle-анимация в игре и важно чтобы глаза НЕ меняли цвет и чтобы персонаж НЕ открывал рта.",
      step1Title: "Загрузка видео",
      dzMain: "Перетащите MP4 файл сюда",
      dzSub: "или нажмите для выбора",
      btnChange: "Сменить",
      step2Title: "Кадрирование 1×1",
      hintDrag: "Тяни рамку чтобы позиционировать персонажа",
      previewLabel: "Итоговый токен",
      tabVideo: "🎥 Видео и Фон",
      tabFrame: "🖼️ Рамка",
      tabBrush: "🖌️ Кисть (Маска)",
      scaleVideo: "Масштаб видео",
      bgColor: "Цвет пустого фона",
      bgAlpha: "Альфа",
      frameTitle: "Декоративная рамка",
      frameDesc: "Лежит поверх всех масок",
      btnLoadFrame: "Выбрать или перетащить PNG",
      btnRemoveFrame: "✕ Удалить",
      noFrame: "Нет рамки",
      scaleFrame: "Масштаб рамки",
      btnBrushErase: "Удалить (Ластик)",
      btnBrushRestore: "Вернуть (Кисть)",
      brushSize: "Размер",
      brushOpacity: "Нажим (Непрозрачность)",
      btnBrushClear: "Очистить все нарисованные маски",
      step3Title: "Настройки",
      maskTitle: "Маска",
      maskDesc: "Форма обрезки краев видео",
      maskNone: "Нет",
      maskCircle: "Круг",
      maskSquare: "Квадрат",
      mask916: "Прямоугольник 9:16",
      mask169: "Прямоугольник 16:9",
      audioTitle: "Без звука",
      audioDesc: "Вырезать аудио (уменьшает вес и улучшает производительность)",
      pingTitle: "Ping-pong (плавная петля)",
      pingDesc: "Оригинал + реверс = бесшовная анимация",
      speedTitle: "Скорость",
      speedDesc: "Множитель скорости видео",
      sizeTitle: "Размер токена",
      sizeDesc: "Разрешение выходного файла",
      step4Title: "Экспорт",
      formatWebmDesc: "Для токена на карте",
      formatGifDesc: "Для арта в листе персонажа",
      fpsLabel: "Кадров в секунду (FPS)",
      qualityTitle: "Качество",
      qLow: "Низкое",
      qMedium: "Среднее",
      qHigh: "Высокое",
      qUltra: "Ультра",
      fileWeight: "Примерный вес:",
      btnExportWebm: "Создать WebM",
      btnExportGif: "Создать GIF",
      progProcessing: "Обработка...",
      successTitle: "Файл сохранён!",
      btnNewFile: "Новый файл",
      fileSelectError: "Пожалуйста, загрузите видеофайл (MP4 или другой формат).",
      progPrep: "Подготовка...",
      progFrames: "🖼️ Извлечение кадров...",
      progReverse: "⏪ Создание эффекта реверса...",
      progWebm: "🎬 Финальное сжатие (Native VP9)...",
      progGif: "🎬 Сборка GIF...",
      progGifPct: "🎬 Сборка GIF",
      progDone: "Готово!",
      progErr: "Ошибка обработки",
      step5Title: "Хранение и CDN",
      step5Desc: "Загрузи готовый WebM/GIF на свой GitHub и скопируй ссылку на файл. Вставь её сюда:",
      step5ResultDesc: "Вставляй эту ссылку прямо в строку расположения файла в Foundry VTT:",
      btnCopy: "Копировать",
      copySuccess: "Скопировано!"
    },
    en: {
      linkDiscord: "💬 My Discord",
      linkDiscordDesc: "— hang out here, donation links available!",
      linkBoosty: "🔥 Boosty",
      linkBoostyDesc: "— developing a revolutionary TTRPG for FVTT (Vasyan-Zone)",
      statusInit: "Initializing...",
      statusFFmpegWasm: "Loading FFmpeg WASM...",
      statusReady: "FFmpeg Ready",
      statusError: "Error: ",
      step0Title: "Material Preparation",
      step0Desc1: "Find or generate a picture of your character in",
      step0Desc1_2: "I use NanoBanana",
      step0Desc1_3: "or any other AI you like.",
      step0Desc2: "Then animate this picture in",
      step0Desc2_2: "or Google Veo 3.1",
      step0PromptTitle: "Use this prompt:",
      step0Prompt: "Make the character slightly move and blink, this is their idle animation in the game and it is important that the eyes DO NOT change color and that the character DOES NOT open their mouth.",
      step1Title: "Load Video",
      dzMain: "Drop MP4 file here",
      dzSub: "or click to select",
      btnChange: "Change",
      step2Title: "Cropping 1×1",
      hintDrag: "Drag the frame to position your character",
      previewLabel: "Final Token",
      tabVideo: "🎥 Video & BG",
      tabFrame: "🖼️ Frame",
      tabBrush: "🖌️ Brush (Mask)",
      scaleVideo: "Video Scale",
      bgColor: "Empty BG Color",
      bgAlpha: "Alpha",
      frameTitle: "Decorative Frame",
      frameDesc: "Sits on top of all masks",
      btnLoadFrame: "Select or drop PNG",
      btnRemoveFrame: "✕ Remove",
      noFrame: "No frame",
      scaleFrame: "Frame Scale",
      btnBrushErase: "Erase (Rubber)",
      btnBrushRestore: "Restore (Brush)",
      brushSize: "Size",
      brushOpacity: "Pressure (Opacity)",
      btnBrushClear: "Clear all drawn masks",
      step3Title: "Settings",
      maskTitle: "Mask",
      maskDesc: "Video edge cropping shape",
      maskNone: "None",
      maskCircle: "Circle",
      maskSquare: "Square",
      mask916: "Rectangle 9:16",
      mask169: "Rectangle 16:9",
      audioTitle: "Mute Audio",
      audioDesc: "Remove audio (reduces size and improves performance)",
      pingTitle: "Ping-pong (smooth loop)",
      pingDesc: "Original + reverse = seamless animation",
      speedTitle: "Speed",
      speedDesc: "Video speed multiplier",
      sizeTitle: "Token Size",
      sizeDesc: "Output file resolution",
      step4Title: "Export",
      formatWebmDesc: "For scene token",
      formatGifDesc: "For character sheet art",
      fpsLabel: "Frames per second (FPS)",
      qualityTitle: "Quality",
      qLow: "Low",
      qMedium: "Medium",
      qHigh: "High",
      qUltra: "Ultra",
      fileWeight: "Est. Size:",
      btnExportWebm: "Create WebM",
      btnExportGif: "Create GIF",
      progProcessing: "Processing...",
      successTitle: "File saved!",
      btnNewFile: "New File",
      fileSelectError: "Please load a video file (MP4 or similar).",
      progPrep: "Preparing...",
      progFrames: "🖼️ Extracting frames...",
      progReverse: "⏪ Creating reverse effect...",
      progWebm: "🎬 Final compression (Native VP9)...",
      progGif: "🎬 Building GIF...",
      progGifPct: "🎬 Building GIF",
      progDone: "Done!",
      progErr: "Processing Error",
      step5Title: "Storage and CDN",
      step5Desc: "Upload the finished WebM/GIF to your GitHub and copy the link to the file. Paste it here:",
      step5ResultDesc: "Paste this link directly into the file path string in Foundry VTT:",
      btnCopy: "Copy",
      copySuccess: "Copied!"
    }
  };

  const t = (key) => {
    return i18nDict[S.lang][key] || key;
  };

  // ─── Application state ─────────────────────────────────────────────────────
  const S = {
    file:        null,
    videoReady:  false,
    naturalW:    0,
    naturalH:    0,
    // Crop position in native video pixels
    cropX:       0,
    cropY:       0,
    cropSize:    0,
    // Settings
    maskType:      'circle',
    removeAudio:   true,
    pingPong:      true,
    speed:         1.0,
    outputSize:    512,
    exportFormat:  'webm',
    fps:           30,
    quality:       'medium',
    lang:          localStorage.getItem('animatorLang') || 'ru',
    // FFmpeg
    ffmpeg:      null,
    ffmpegReady: false,
    processing:  false,
    // Drag & Brush interaction
    isDragging:    false,
    isResizing:    false,
    resizeHandle:  null, // 'nw', 'ne', 'sw', 'se'
    isBrushing:    false,
    dragStartMx:   0,
    dragStartMy:   0,
    dragStartCX:   0,
    dragStartCY:   0,
    dragStartCropSize: 0,
    
    // Brush State
    brushEnabled:  false,
    brushMode:     'erase', // 'erase' or 'restore'
    brushSize:     20,
    brushOpacity:  1.0,
    keepCanvas:    null,
    dropCanvas:    null,

    // Background State
    bgTransparent: true,
    bgColor:       '#000000',
    
    // Frame Overlay State
    frameImg:      null,
    frameX:        0,
    frameY:        0,
    frameScaleX:   1,
    frameScaleY:   1,
    frameLockRatio: true,
    dragStartFX:   0,
    dragStartFY:   0,
    dragStartFScaleX: 1,
    dragStartFScaleY: 1,
    
    // UI State
    activeTab:     'video',

    // RAF
    rafId: null,
    // Event handlers (stored for cleanup)
    _onProgress: null,
    _onLog:      null,
  };

  function setLanguage(lang) {
    S.lang = lang;
    localStorage.setItem('animatorLang', lang);
    
    // Update DOM
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18nDict[lang] && i18nDict[lang][key]) {
        el.textContent = i18nDict[lang][key];
      }
    });

    // Update active flag buttons
    if (dom.btnLangRu) dom.btnLangRu.style.opacity = lang === 'ru' ? '1' : '0.4';
    if (dom.btnLangEn) dom.btnLangEn.style.opacity = lang === 'en' ? '1' : '0.4';
  }

  // Setup language listeners
  if (dom.btnLangRu) dom.btnLangRu.addEventListener('click', () => setLanguage('ru'));
  if (dom.btnLangEn) dom.btnLangEn.addEventListener('click', () => setLanguage('en'));
  
  // Init language
  setLanguage(S.lang);

  // ─── Utility: format file size ─────────────────────────────────────────────
  function fmtSize(bytes) {
    return bytes > 1048576
      ? (bytes / 1048576).toFixed(1) + ' МБ'
      : (bytes / 1024).toFixed(0) + ' КБ';
  }

  // ─── Status badge ──────────────────────────────────────────────────────────
  function setStatus(type, text) {
    dom.statusDot.className = 'status-dot ' + type;
    dom.statusText.textContent = text;
  }

  // ─── Export button enabled state ───────────────────────────────────────────
  function syncExportBtn() {
    dom.btnExport.disabled = !S.ffmpegReady || !S.videoReady || S.processing;
  }

  // ─── FFmpeg initialisation ─────────────────────────────────────────────────
  async function initFFmpeg() {
    setStatus('loading', t('statusInit'));
    try {
      const FFmpegCtor =
        (window.FFmpeg     && window.FFmpeg.FFmpeg)     ||
        (window.FFmpegWASM && window.FFmpegWASM.FFmpeg);

      if (!FFmpegCtor) {
        throw new Error('lib/ffmpeg.js не найден. Запустите download_libs.bat');
      }

      const util = window.FFmpegUtil || {};
      if (!util.fetchFile) {
        throw new Error('lib/ffmpeg-util.js не найден. Запустите download_libs.bat');
      }

      S.ffmpeg = new FFmpegCtor();

      // Build absolute base URL for the lib/ folder.
      // Strip page filename so Workers resolve relative paths correctly.
      const pageDir = window.location.href.replace(/\/[^\/]*(\?.*)?$/, '/');
      const libBase = pageDir + 'lib';

      setStatus('loading', t('statusFFmpegWasm'));

      // No classWorkerURL needed: ffmpeg.js is served from lib/ (same origin),
      // so it resolves 814.ffmpeg.js automatically via document.currentScript.src
      // and creates a proper module Worker — no CORS issue, no importScripts conflict.
      await S.ffmpeg.load({
        coreURL: libBase + '/ffmpeg-core.js',
        wasmURL: libBase + '/ffmpeg-core.wasm',
      });

      S.ffmpegReady = true;
      setStatus('ready', t('statusReady'));
      syncExportBtn();
    } catch (err) {
      const msg = (err && (err.message || err.toString())) || JSON.stringify(err);
      setStatus('error', t('statusError') + msg);
      console.error('[FFmpeg init]', err);
    }
  }

  // ─── File loading ──────────────────────────────────────────────────────────
  function loadFile(file) {
    if (!file) return;
    if (!file.type.startsWith('video/')) {
      alert(t('fileSelectError'));
      return;
    }
    
    // Свернуть нулевую карточку (Шаг 00)
    const c0Content = $('card0Content');
    const c0Icon = $('card0ToggleIcon');
    if (c0Content && c0Icon) {
      c0Content.style.maxHeight = '0px';
      c0Icon.style.transform = 'rotate(180deg)';
    }

    S.file = file;
    dom.fileBarName.textContent = file.name;
    dom.fileBarSize.textContent = fmtSize(file.size);
    hide(dom.dropzone);
    show(dom.fileBar);

    if (dom.vid.src) URL.revokeObjectURL(dom.vid.src);
    dom.vid.src = URL.createObjectURL(file);
    // Removed onloadedmetadata assignment here, moved to main loadedmetadata listener
    dom.vid.play();
  }

  // ─── Video metadata ready ──────────────────────────────────────────────────
  dom.vid.addEventListener('loadedmetadata', () => {
    S.naturalW = dom.vid.videoWidth || 1;
    S.naturalH = dom.vid.videoHeight || 1;

    S.keepCanvas = document.createElement('canvas');
    S.keepCanvas.width = S.naturalW;
    S.keepCanvas.height = S.naturalH;
    
    S.dropCanvas = document.createElement('canvas');
    S.dropCanvas.width = S.naturalW;
    S.dropCanvas.height = S.naturalH;

    const baseDim = Math.max(S.naturalW, S.naturalH);
    S.cropSize = baseDim;
    S.cropX = Math.floor((S.naturalW - baseDim) / 2);
    S.cropY = Math.floor((S.naturalH - baseDim) / 2);

    if (dom.cropSizeRange) dom.cropSizeRange.value = 100;
    if (dom.sizeValLabel) dom.sizeValLabel.textContent = '100%';

    S.videoReady = true;
    show(dom.card2);
    show(dom.card3);
    show(dom.card4);
    
    // Call initial file size estimation
    if (typeof estimateFileSize === 'function') {
      estimateFileSize();
    }
    
    syncExportBtn();

    // Wait one frame so the video element has rendered dimensions
    requestAnimationFrame(() => {
      syncCropCanvasSize();
      drawOverlay();
    });

    startPreviewLoop();
  });

  // ─── Crop canvas: size sync with video element ─────────────────────────────
  function syncCropCanvasSize() {
    const rect = dom.vid.getBoundingClientRect();
    dom.cropCanvas.width  = rect.width;
    dom.cropCanvas.height = rect.height;
    dom.cropCanvas.style.width  = rect.width  + 'px';
    dom.cropCanvas.style.height = rect.height + 'px';
  }

  /**
   * Calculates the actual rendered video area inside the <video> element box.
   * object-fit:contain may letterbox/pillarbox the content.
   */
  function getRenderArea() {
    const cw = dom.cropCanvas.width;
    const ch = dom.cropCanvas.height;
    const vAR = S.naturalW / S.naturalH;
    const cAR = cw / ch;
    let rw, rh;
    if (vAR > cAR) { rw = cw; rh = cw / vAR; }
    else           { rh = ch; rw = ch * vAR; }
    return { x: (cw - rw) / 2, y: (ch - rh) / 2, w: rw, h: rh };
  }

  /**
   * Returns crop box coordinates in canvas (display) pixels.
   */
  function getCropDisplay() {
    const ra = getRenderArea();
    const sx = ra.w / S.naturalW;
    const sy = ra.h / S.naturalH;
    return {
      x:    ra.x + S.cropX    * sx,
      y:    ra.y + S.cropY    * sy,
      size: S.cropSize * sx,
      sx, sy, ra,
    };
  }

  // ─── Draw crop overlay on canvas ───────────────────────────────────────────
  function buildMaskPath(ctx, maskType, x, y, size) {
    const cx = x + size / 2;
    const cy = y + size / 2;
    const r = size / 2;
    ctx.beginPath();
    
    if (maskType === 'circle') {
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
    } else if (maskType === 'roundedSquare') {
      const rad = size * 0.15;
      ctx.moveTo(x + rad, y);
      ctx.arcTo(x + size, y, x + size, y + size, rad);
      ctx.arcTo(x + size, y + size, x, y + size, rad);
      ctx.arcTo(x, y + size, x, y, rad);
      ctx.arcTo(x, y, x + size, y, rad);
    } else if (maskType === 'hexagon') {
      for (let i = 0; i < 6; i++) {
        const angle = Math.PI / 3 * i - Math.PI / 2;
        const px = cx + r * Math.cos(angle);
        const py = cy + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    } else if (maskType === 'octagon') {
      for (let i = 0; i < 8; i++) {
        const angle = Math.PI / 4 * i - Math.PI / 8;
        const px = cx + r * Math.cos(angle);
        const py = cy + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    } else if (maskType === 'diamond') {
      ctx.moveTo(cx, y);
      ctx.lineTo(x + size, cy);
      ctx.lineTo(cx, y + size);
      ctx.lineTo(x, cy);
      ctx.closePath();
    } else if (maskType === 'triangle') {
      ctx.moveTo(cx, y);
      ctx.lineTo(x + size, y + size);
      ctx.lineTo(x, y + size);
      ctx.closePath();
    } else if (maskType === 'star') {
      const outerR = r;
      const innerR = r * 0.4;
      for (let i = 0; i < 10; i++) {
        const angle = Math.PI / 5 * i - Math.PI / 2;
        const rad = (i % 2 === 0) ? outerR : innerR;
        const px = cx + rad * Math.cos(angle);
        const py = cy + rad * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    } else if (maskType === 'rect9x16') {
      const w = size * (9/16);
      ctx.rect(x + (size - w)/2, y, w, size);
    } else if (maskType === 'rect16x9') {
      const h = size * (9/16);
      ctx.rect(x, y + (size - h)/2, size, h);
    } else {
      ctx.rect(x, y, size, size); // square / none
    }
  }

  function drawOverlay() {
    const canvas = dom.cropCanvas;
    const ctx    = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const { x, y, size } = getCropDisplay();
    const cx = x + size / 2;
    const cy = y + size / 2;
    const r  = size / 2;

    // 1. Darken area outside the crop region
    ctx.fillStyle = 'rgba(0,0,0,0.55)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 2. Punch out the crop area so the video shows through
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    buildMaskPath(ctx, S.maskType, x, y, size);
    ctx.fill();
    ctx.restore();

    // 2.5. Draw green border
    ctx.save();
    ctx.strokeStyle = '#00ff00';
    ctx.lineWidth = 2;
    buildMaskPath(ctx, S.maskType, x, y, size);
    ctx.stroke();
    ctx.restore();

    // 3. Draw frame overlay preview if in frame tab
    if ((S.activeTab === 'frame' || S.activeTab === 'video') && S.frameImg) {
      ctx.save();
      const sx = size / S.cropSize;
      const sy = size / S.cropSize;
      ctx.globalAlpha = 0.6;
      
      const fx = x + S.frameX * sx;
      const fy = y + S.frameY * sy;
      const fw = size * S.frameScaleX;
      const fh = size * S.frameScaleY;
      
      ctx.drawImage(S.frameImg, fx, fy, fw, fh);
      
      if (S.activeTab === 'frame') {
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.8)';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 2]);
        ctx.strokeRect(fx, fy, fw, fh);
        ctx.setLineDash([]);
        
        ctx.fillStyle = 'rgba(0, 255, 255, 0.9)';
        [[fx, fy], [fx + fw, fy], [fx, fy + fh], [fx + fw, fy + fh]].forEach(([hx, hy]) => {
          ctx.beginPath(); ctx.arc(hx, hy, 5, 0, Math.PI * 2); ctx.fill();
        });
      }
      ctx.restore();
    }

    // 4. Draw Brush custom masks (only inside the video area)
    if (S.keepCanvas && S.dropCanvas && S.keepCanvas.width > 0 && S.dropCanvas.width > 0) {
      const { sx, sy, ra } = getCropDisplay();
      
      // Keep strokes: punch out darkness to reveal video
      ctx.save();
      ctx.globalCompositeOperation = 'destination-out';
      ctx.globalAlpha = 1.0;
      ctx.drawImage(S.keepCanvas, ra.x, ra.y, ra.w, ra.h);
      ctx.restore();
      
      // Keep strokes: tint red
      ctx.save();
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 0.3;
      ctx.drawImage(S.keepCanvas, ra.x, ra.y, ra.w, ra.h);
      ctx.restore();

      // Drop strokes: draw white (erase/drop)
      ctx.save();
      ctx.globalCompositeOperation = 'source-over';
      ctx.globalAlpha = 0.6; // Semi-transparent whitish overlay
      ctx.drawImage(S.dropCanvas, ra.x, ra.y, ra.w, ra.h);
      ctx.restore();
    }

    // Border
    ctx.strokeStyle = 'rgba(124,110,239,0.9)';
    ctx.lineWidth   = 2;
    buildMaskPath(ctx, S.maskType, x, y, size);
    ctx.stroke();

    // Corner dots as drag handles
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    [[x, y], [x + size, y], [x, y + size], [x + size, y + size]].forEach(([hx, hy]) => {
      ctx.beginPath(); ctx.arc(hx, hy, 5, 0, Math.PI * 2); ctx.fill();
    });

    // Centre cross indicator
    ctx.strokeStyle = 'rgba(255,255,255,0.25)';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(cx - 12, cy); ctx.lineTo(cx + 12, cy);
    ctx.moveTo(cx, cy - 12); ctx.lineTo(cx, cy + 12);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  // ─── Drag & Brush: mouse events on the crop canvas ───────────────────────
  function paintBrush(mx, my) {
    if (!S.keepCanvas || !S.dropCanvas) return;
    const { sx, sy, ra } = getCropDisplay();
    
    // Convert canvas display pixel (mx, my) to original video pixel
    const natX = (mx - ra.x) / sx;
    const natY = (my - ra.y) / sy;
    
    const targetCanvas = S.brushMode === 'restore' ? S.keepCanvas : S.dropCanvas;
    const otherCanvas  = S.brushMode === 'restore' ? S.dropCanvas : S.keepCanvas;
    
    const ctxTarget = targetCanvas.getContext('2d');
    const ctxOther  = otherCanvas.getContext('2d');
    
    // Scale brush size to native video coordinates
    const natSize = S.brushSize / sx;
    
    // Draw on target
    ctxTarget.globalAlpha = S.brushOpacity;
    ctxTarget.fillStyle = S.brushMode === 'restore' ? '#ff0000' : '#ffffff';
    ctxTarget.beginPath();
    ctxTarget.arc(natX, natY, natSize / 2, 0, Math.PI * 2);
    ctxTarget.fill();
    ctxTarget.globalAlpha = 1.0;
    
    // Erase from the other to prevent conflicts
    ctxOther.globalCompositeOperation = 'destination-out';
    ctxOther.beginPath();
    ctxOther.arc(natX, natY, natSize / 2, 0, Math.PI * 2);
    ctxOther.fill();
    ctxOther.globalCompositeOperation = 'source-over';
    
    drawOverlay();
  }

  dom.cropCanvas.addEventListener('mousedown', (e) => {
    const rect = dom.cropCanvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;
    
    if (S.activeTab === 'brush') {
      S.isBrushing = true;
      paintBrush(mx, my);
      return;
    }

    const { x, y, size } = getCropDisplay();
    
    // Check resize handles first (pad by 10px for easier grabbing)
    const hitR = 12;
    const handles = {
      'nw': { hx: x, hy: y },
      'ne': { hx: x + size, hy: y },
      'sw': { hx: x, hy: y + size },
      'se': { hx: x + size, hy: y + size }
    };
    
    let clickedHandle = null;
    if (S.activeTab === 'video') {
      for (const [key, pos] of Object.entries(handles)) {
        if (Math.hypot(mx - pos.hx, my - pos.hy) <= hitR) {
          clickedHandle = key;
          break;
        }
      }
    } else if (S.activeTab === 'frame' && S.frameImg) {
      const sx = size / S.cropSize;
      const sy = size / S.cropSize;
      const fx = x + S.frameX * sx;
      const fy = y + S.frameY * sy;
      const fw = size * S.frameScaleX;
      const fh = size * S.frameScaleY;
      const frameHandles = {
        'nw': { hx: fx, hy: fy },
        'ne': { hx: fx + fw, hy: fy },
        'sw': { hx: fx, hy: fy + fh },
        'se': { hx: fx + fw, hy: fy + fh }
      };
      for (const [key, pos] of Object.entries(frameHandles)) {
        if (Math.hypot(mx - pos.hx, my - pos.hy) <= hitR) {
          clickedHandle = key;
          break;
        }
      }
    }

    if (clickedHandle) {
      S.isResizing = true;
      S.resizeHandle = clickedHandle;
      S.dragStartMx = mx;
      S.dragStartMy = my;
      S.dragStartCX = S.cropX;
      S.dragStartCY = S.cropY;
      S.dragStartCropSize = S.cropSize;
      
      S.dragStartFX = S.frameX;
      S.dragStartFY = S.frameY;
      S.dragStartFScaleX = S.frameScaleX;
      S.dragStartFScaleY = S.frameScaleY;
      
      e.preventDefault();
      return;
    }

    if (mx >= x && mx <= x + size && my >= y && my <= y + size) {
      if (S.activeTab === 'frame' && S.frameImg) {
        const sx = size / S.cropSize;
        const sy = size / S.cropSize;
        const fx = x + S.frameX * sx;
        const fy = y + S.frameY * sy;
        const fw = size * S.frameScaleX;
        const fh = size * S.frameScaleY;
        if (mx >= fx && mx <= fx + fw && my >= fy && my <= fy + fh) {
          S.isDragging = true;
          S.dragStartMx = mx;
          S.dragStartMy = my;
          S.dragStartFX = S.frameX;
          S.dragStartFY = S.frameY;
          dom.cropCanvas.style.cursor = 'grabbing';
          e.preventDefault();
        }
      } else if (S.activeTab === 'video') {
        S.isDragging  = true;
        S.dragStartMx = mx;
        S.dragStartMy = my;
        S.dragStartCX = S.cropX;
        S.dragStartCY = S.cropY;
        dom.cropCanvas.style.cursor = 'grabbing';
        e.preventDefault();
      }
    }
  });

  dom.cropCanvas.addEventListener('mousemove', (e) => {
    const rect = dom.cropCanvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    if (S.isBrushing) {
      paintBrush(mx, my);
      return;
    }
    
    if (S.isResizing) {
      const { x, y, size } = getCropDisplay();
      const sx = size / S.cropSize;
      const sy = size / S.cropSize;
      const dxDisplay = mx - S.dragStartMx;
      const dyDisplay = my - S.dragStartMy;

      if (S.activeTab === 'frame') {
        let newW = size * S.dragStartFScaleX;
        let newH = size * S.dragStartFScaleY;
        let newFX = S.dragStartFX;
        let newFY = S.dragStartFY;
        
        if (S.resizeHandle === 'se') {
          newW += dxDisplay;
          newH += dyDisplay;
        } else if (S.resizeHandle === 'nw') {
          newW -= dxDisplay;
          newH -= dyDisplay;
          newFX += dxDisplay / sx;
          newFY += dyDisplay / sy;
        } else if (S.resizeHandle === 'ne') {
          newW += dxDisplay;
          newH -= dyDisplay;
          newFY += dyDisplay / sy;
        } else if (S.resizeHandle === 'sw') {
          newW -= dxDisplay;
          newH += dyDisplay;
          newFX += dxDisplay / sx;
        }

        if (S.frameLockRatio) {
          const ratio = Math.max(newW, newH); // or use start aspect
          if (S.resizeHandle === 'nw' || S.resizeHandle === 'ne') newFY += (newH - ratio) / sy;
          newW = ratio;
          newH = ratio;
        }

        if (newW < 20) {
          if (S.resizeHandle === 'nw' || S.resizeHandle === 'sw') newFX -= (20 - newW) / sx;
          newW = 20;
        }
        if (newH < 20) {
          if (S.resizeHandle === 'nw' || S.resizeHandle === 'ne') newFY -= (20 - newH) / sy;
          newH = 20;
        }

        S.frameScaleX = newW / size;
        S.frameScaleY = newH / size;
        S.frameX = newFX;
        S.frameY = newFY;
        
        if (dom.frameScaleRange && S.frameLockRatio) {
          dom.frameScaleRange.value = Math.round(S.frameScaleX * 100);
          if (dom.frameScaleLabel) dom.frameScaleLabel.textContent = dom.frameScaleRange.value + '%';
        }
        drawOverlay();
        return;
      } else if (S.activeTab === 'video') {
      
      // We want to keep aspect ratio 1:1, so we take the largest delta (or average)
      // Actually, standard resize is based on primary axis or average.
      // Easiest is to project delta onto the diagonal of the handle.
      let dSizeNative = 0;
      if (S.resizeHandle === 'se') {
        dSizeNative = Math.max(dxDisplay/sx, dyDisplay/sy);
        S.cropSize = Math.max(20, S.dragStartCropSize + dSizeNative);
        // cropX and cropY don't change for SE
      } else if (S.resizeHandle === 'nw') {
        dSizeNative = Math.min(dxDisplay/sx, dyDisplay/sy);
        S.cropSize = Math.max(20, S.dragStartCropSize - dSizeNative);
        const diff = S.dragStartCropSize - S.cropSize;
        S.cropX = S.dragStartCX - diff;
        S.cropY = S.dragStartCY - diff;
      } else if (S.resizeHandle === 'ne') {
        dSizeNative = dxDisplay/sx; // rely on X
        // if moving right, size increases. Y moves up.
        S.cropSize = Math.max(20, S.dragStartCropSize + dSizeNative);
        const diff = S.cropSize - S.dragStartCropSize;
        S.cropY = S.dragStartCY - diff;
      } else if (S.resizeHandle === 'sw') {
        dSizeNative = dxDisplay/sx; // rely on X
        // if moving left, size increases. X moves left.
        S.cropSize = Math.max(20, S.dragStartCropSize - dSizeNative);
        const diff = S.cropSize - S.dragStartCropSize;
        S.cropX = S.dragStartCX - diff;
      }

      // Constrain box within video
      if (S.cropSize > S.naturalW) S.cropSize = S.naturalW;
      if (S.cropSize > S.naturalH) S.cropSize = S.naturalH;

      const minX = Math.min(0, S.naturalW - S.cropSize);
      const maxX = Math.max(0, S.naturalW - S.cropSize);
      const minY = Math.min(0, S.naturalH - S.cropSize);
      const maxY = Math.max(0, S.naturalH - S.cropSize);
      
      S.cropX = Math.max(minX, Math.min(maxX, S.cropX));
      S.cropY = Math.max(minY, Math.min(maxY, S.cropY));
      
      // Update UI Slider
      const baseDim = Math.max(S.naturalW, S.naturalH);
      const pct = Math.round((S.cropSize / baseDim) * 100);
      if (dom.cropSizeRange) dom.cropSizeRange.value = pct;
      if (dom.sizeValLabel) dom.sizeValLabel.textContent = pct + '%';
      
      // Background UI Toggle
      if (pct > 100 && dom.bgControls) {
        show(dom.bgControls);
      } else if (pct <= 100 && dom.bgControls) {
        hide(dom.bgControls);
      }

      drawOverlay();
      return;
      } // Closing for: else if (S.activeTab === 'video')
    } // Closing for: if (S.isResizing)

    if (S.isDragging) {
      const { sx, sy } = getCropDisplay();
      const dx = (mx - S.dragStartMx) / sx;
      const dy = (my - S.dragStartMy) / sy;
      
      if (S.activeTab === 'frame') {
        S.frameX = S.dragStartFX + dx;
        S.frameY = S.dragStartFY + dy;
      } else if (S.activeTab === 'video') {
        const minX = Math.min(0, S.naturalW - S.cropSize);
        const maxX = Math.max(0, S.naturalW - S.cropSize);
        const minY = Math.min(0, S.naturalH - S.cropSize);
        const maxY = Math.max(0, S.naturalH - S.cropSize);
        S.cropX = Math.max(minX, Math.min(maxX, S.dragStartCX + dx));
        S.cropY = Math.max(minY, Math.min(maxY, S.dragStartCY + dy));
      }
      drawOverlay();
    } else {
      const { x, y, size } = getCropDisplay();
      
      // Cursor check
      let cursor = 'default';
      if (S.activeTab === 'brush') {
        cursor = 'crosshair';
      } else if (S.activeTab === 'video') {
        const hitR = 12;
        const handles = {
          'nw': { hx: x, hy: y },
          'ne': { hx: x + size, hy: y },
          'sw': { hx: x, hy: y + size },
          'se': { hx: x + size, hy: y + size }
        };
        let overHandle = null;
        for (const [key, pos] of Object.entries(handles)) {
          if (Math.hypot(mx - pos.hx, my - pos.hy) <= hitR) {
            overHandle = key;
            break;
          }
        }
        if (overHandle) {
          cursor = (overHandle === 'nw' || overHandle === 'se') ? 'nwse-resize' : 'nesw-resize';
        } else if (mx >= x && mx <= x + size && my >= y && my <= y + size) {
          cursor = 'grab';
        }
      } else if (S.activeTab === 'frame' && S.frameImg) {
        const hitR = 12;
        const sx = size / S.cropSize;
        const sy = size / S.cropSize;
        const fx = x + S.frameX * sx;
        const fy = y + S.frameY * sy;
        const fw = size * S.frameScaleX;
        const fh = size * S.frameScaleY;
        
        const frameHandles = {
          'nw': { hx: fx, hy: fy },
          'ne': { hx: fx + fw, hy: fy },
          'sw': { hx: fx, hy: fy + fh },
          'se': { hx: fx + fw, hy: fy + fh }
        };
        let overHandle = null;
        for (const [key, pos] of Object.entries(frameHandles)) {
          if (Math.hypot(mx - pos.hx, my - pos.hy) <= hitR) {
            overHandle = key;
            break;
          }
        }
        if (overHandle) {
          cursor = (overHandle === 'nw' || overHandle === 'se') ? 'nwse-resize' : 'nesw-resize';
        } else if (mx >= fx && mx <= fx + fw && my >= fy && my <= fy + fh) {
          cursor = 'grab';
        }
      }
      
      dom.cropCanvas.style.cursor = cursor;
    }
  });

  document.addEventListener('mouseup', () => {
    if (S.isBrushing) {
      S.isBrushing = false;
    }
    if (S.isResizing) {
      S.isResizing = false;
      S.resizeHandle = null;
    }
    if (S.isDragging) {
      S.isDragging = false;
      dom.cropCanvas.style.cursor = S.activeTab === 'brush' ? 'crosshair' : 'grab';
    }
  });

  // ─── Tabs Switching ────────────────────────────────────────────────────────
  function switchTab(tabId) {
    S.activeTab = tabId;
    
    // Update active tab button style
    dom.tabVideo.style.background = tabId === 'video' ? 'rgba(124,110,239,0.3)' : 'transparent';
    dom.tabVideo.style.color = tabId === 'video' ? '#fff' : '#aaa';
    
    dom.tabFrame.style.background = tabId === 'frame' ? 'rgba(124,110,239,0.3)' : 'transparent';
    dom.tabFrame.style.color = tabId === 'frame' ? '#fff' : '#aaa';
    
    dom.tabBrush.style.background = tabId === 'brush' ? 'rgba(124,110,239,0.3)' : 'transparent';
    dom.tabBrush.style.color = tabId === 'brush' ? '#fff' : '#aaa';
    
    // Update panels
    if (tabId === 'video') show(dom.panelVideo); else hide(dom.panelVideo);
    if (tabId === 'frame') show(dom.panelFrame); else hide(dom.panelFrame);
    if (tabId === 'brush') show(dom.panelBrush); else hide(dom.panelBrush);
    
    // Update hint
    if (tabId === 'video') dom.modeHintText.textContent = 'Тяни рамку чтобы позиционировать персонажа';
    if (tabId === 'frame') dom.modeHintText.textContent = 'Тяни рамку внутри кадра чтобы её перемещать';
    if (tabId === 'brush') dom.modeHintText.textContent = 'Рисуй по видео, чтобы удалить или вернуть зоны';
    
    drawOverlay();
  }
  
  dom.tabVideo.addEventListener('click', () => switchTab('video'));
  dom.tabFrame.addEventListener('click', () => switchTab('frame'));
  dom.tabBrush.addEventListener('click', () => switchTab('brush'));

  // ─── Crop size slider ──────────────────────────────────────────────────────
  dom.cropSizeRange.addEventListener('input', () => {
    const pct  = dom.cropSizeRange.value / 100;
    dom.sizeValLabel.textContent = dom.cropSizeRange.value + '%';
    
    // Show/hide background controls if zoom > 100%
    if (dom.cropSizeRange.value > 100) {
      show(dom.bgControls);
    } else {
      hide(dom.bgControls);
    }
    
    const baseDim = Math.max(S.naturalW, S.naturalH);
    S.cropSize = Math.round(baseDim * pct);
    
    const minX = Math.min(0, S.naturalW - S.cropSize);
    const maxX = Math.max(0, S.naturalW - S.cropSize);
    const minY = Math.min(0, S.naturalH - S.cropSize);
    const maxY = Math.max(0, S.naturalH - S.cropSize);
    S.cropX = Math.max(minX, Math.min(maxX, S.cropX));
    S.cropY = Math.max(minY, Math.min(maxY, S.cropY));
    
    drawOverlay();
  });

  // ─── Background & Frame Events ─────────────────────────────────────────────
  if (dom.bgTransparentCheck) {
    dom.bgTransparentCheck.addEventListener('change', () => {
      S.bgTransparent = dom.bgTransparentCheck.checked;
    });
    dom.bgColorPicker.addEventListener('input', () => {
      S.bgColor = dom.bgColorPicker.value;
    });
  }

  if (dom.btnLoadFrame) {
    dom.btnLoadFrame.addEventListener('click', () => {
      dom.frameInput.click();
    });

    if (dom.btnDefaultFrames) {
      dom.btnDefaultFrames.addEventListener('click', async () => {
        try {
          const res = await fetch('/api/frames');
          if (!res.ok) throw new Error('Network error');
          const files = await res.json();
          dom.framesGrid.innerHTML = '';
          if (files.length === 0) {
            dom.framesGrid.innerHTML = '<p style="color: #aaa; grid-column: 1/-1;">Папка Frames пуста или не найдена.</p>';
          } else {
            files.forEach(f => {
              const div = document.createElement('div');
              div.style.background = 'rgba(255,255,255,0.05)';
              div.style.borderRadius = '8px';
              div.style.padding = '8px';
              div.style.textAlign = 'center';
              div.style.cursor = 'pointer';
              div.style.transition = '0.2s';
              div.onmouseover = () => div.style.background = 'rgba(255,255,255,0.1)';
              div.onmouseout = () => div.style.background = 'rgba(255,255,255,0.05)';
              
              const img = document.createElement('img');
              const safeName = encodeURIComponent(f);
              img.src = '/Frames/' + safeName;
              img.style.maxWidth = '100%';
              img.style.height = 'auto';
              img.style.maxHeight = '160px';
              img.style.objectFit = 'contain';
              img.style.marginBottom = '12px';
              
              const name = document.createElement('div');
              name.textContent = f;
              name.style.fontSize = '0.85rem';
              name.style.color = '#ccc';
              name.style.wordBreak = 'break-all';
              
              div.appendChild(img);
              div.appendChild(name);
              
              div.onclick = () => {
                const safeName = encodeURIComponent(f);
                const url = '/Frames/' + safeName;
                const tmpImg = new Image();
                tmpImg.crossOrigin = 'anonymous';
                tmpImg.onload = () => {
                  S.frameImg = tmpImg;
                  S.frameX = 0;
                  S.frameY = 0;
                  S.frameScaleX = 1;
                  S.frameScaleY = 1;
                  if (dom.frameScaleRange) dom.frameScaleRange.value = 100;
                  if (dom.frameScaleLabel) dom.frameScaleLabel.textContent = '100%';
                  dom.frameNameLabel.textContent = f;
                  dom.frameNameLabel.style.color = '#fff';
                  dom.frameDropzone.style.borderColor = '#00ff00';
                  show(dom.btnRemoveFrame);
                  dom.frameTransformControls.classList.remove('hidden');
                  hide(dom.framesModal);
                  drawOverlay();
                };
                tmpImg.src = url;
              };
              dom.framesGrid.appendChild(div);
            });
          }
          show(dom.framesModal);
        } catch (e) {
          console.error(e);
          alert('Ошибка загрузки списка рамок. Проверьте запущен ли сервер START_RUN_STROY.');
        }
      });
    }

    if (dom.btnCloseFramesModal) {
      dom.btnCloseFramesModal.addEventListener('click', () => {
        hide(dom.framesModal);
      });
    }
    
    function loadFrameFile(file) {
      if (!file || !file.type.startsWith('image/')) return;
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        S.frameImg = img;
        S.frameX = 0;
        S.frameY = 0;
        S.frameScaleX = 1;
        S.frameScaleY = 1;
        if (dom.frameScaleRange) dom.frameScaleRange.value = 100;
        if (dom.frameScaleLabel) dom.frameScaleLabel.textContent = '100%';
        dom.frameNameLabel.textContent = file.name;
        dom.frameNameLabel.style.color = '#fff';
        dom.frameDropzone.style.borderColor = '#00ff00';
        dom.frameTransformControls.classList.remove('hidden');
        drawOverlay();
      };
      img.src = url;
    }

    dom.frameInput.addEventListener('change', (e) => {
      loadFrameFile(e.target.files[0]);
    });
    
    // Drag & Drop for Frame
    dom.frameDropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dom.frameDropzone.style.background = 'rgba(255,255,255,0.05)';
      dom.frameDropzone.style.borderColor = 'rgba(124,110,239,0.5)';
    });
    
    dom.frameDropzone.addEventListener('dragleave', (e) => {
      e.preventDefault();
      dom.frameDropzone.style.background = 'transparent';
      dom.frameDropzone.style.borderColor = 'rgba(255,255,255,0.1)';
    });
    
    dom.frameDropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dom.frameDropzone.style.background = 'transparent';
      dom.frameDropzone.style.borderColor = 'rgba(255,255,255,0.1)';
      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        loadFrameFile(e.dataTransfer.files[0]);
      }
    });

    dom.btnRemoveFrame.addEventListener('click', () => {
      S.frameImg = null;
      dom.frameNameLabel.textContent = 'Нет рамки';
      hide(dom.btnRemoveFrame);
      hide(dom.frameTransformControls);
      dom.frameInput.value = '';
      drawOverlay();
    });

    if (dom.frameScaleRange) {
      dom.frameScaleRange.addEventListener('input', () => {
        const val = parseInt(dom.frameScaleRange.value, 10) / 100;
        if (S.frameLockRatio) {
          S.frameScaleX = val;
          S.frameScaleY = val;
        } else {
          // If unlocked, we probably only want the slider to adjust overall scale. 
          // Let's just adjust both by the same ratio of change or just set them equal.
          // Setting them equal makes sense, or we can just leave the slider to act uniformly.
          S.frameScaleX = val;
          S.frameScaleY = val;
        }
        dom.frameScaleLabel.textContent = dom.frameScaleRange.value + '%';
        drawOverlay();
      });
    }

    if (dom.frameLockRatioCheck) {
      dom.frameLockRatioCheck.addEventListener('change', () => {
        S.frameLockRatio = dom.frameLockRatioCheck.checked;
        if (S.frameLockRatio) {
          // Re-sync aspect ratio 1:1 if checked
          const max = Math.max(S.frameScaleX, S.frameScaleY);
          S.frameScaleX = max;
          S.frameScaleY = max;
          if (dom.frameScaleRange) {
            dom.frameScaleRange.value = Math.round(max * 100);
            if (dom.frameScaleLabel) dom.frameScaleLabel.textContent = dom.frameScaleRange.value + '%';
          }
          drawOverlay();
        }
      });
    }
  }

  // ─── Brush Mode ────────────────────────────────────────────────────────────
    dom.btnBrushRestore.addEventListener('click', () => {
      S.brushMode = 'restore';
      dom.btnBrushRestore.style.border = '1px solid #fff';
      dom.btnBrushErase.style.border = 'none';
      dom.btnBrushRestore.style.background = 'rgba(255,0,0,0.5)';
      dom.btnBrushErase.style.background = 'rgba(255,255,255,0.2)';
    });

    dom.btnBrushErase.addEventListener('click', () => {
      S.brushMode = 'erase';
      dom.btnBrushErase.style.border = '1px solid #fff';
      dom.btnBrushRestore.style.border = 'none';
      dom.btnBrushErase.style.background = 'rgba(255,255,255,0.5)';
      dom.btnBrushRestore.style.background = 'rgba(255,0,0,0.3)';
    });

    dom.brushSizeRange.addEventListener('input', () => {
      S.brushSize = parseInt(dom.brushSizeRange.value, 10);
      dom.brushSizeLabel.textContent = S.brushSize;
    });

    dom.brushOpacityRange.addEventListener('input', () => {
      S.brushOpacity = parseInt(dom.brushOpacityRange.value, 10) / 100;
      dom.brushOpacityLabel.textContent = dom.brushOpacityRange.value + '%';
    });

    dom.btnBrushClear.addEventListener('click', () => {
      if (S.keepCanvas && S.dropCanvas) {
        S.keepCanvas.getContext('2d').clearRect(0, 0, S.naturalW, S.naturalH);
        S.dropCanvas.getContext('2d').clearRect(0, 0, S.naturalW, S.naturalH);
        drawOverlay();
      }
    });

  if (dom.maskSelect) {
    dom.maskSelect.addEventListener('change', () => {
      S.maskType = dom.maskSelect.value;
      drawOverlay();
    });
  }

  if (dom.audioCheck) {
    dom.audioCheck.addEventListener('change', () => {
      S.removeAudio = dom.audioCheck.checked;
    });
  }

  dom.pingPongCheck.addEventListener('change', () => {
    S.pingPong = dom.pingPongCheck.checked;
    estimateFileSize();
  });

  if (dom.speedSelect) {
    dom.speedSelect.addEventListener('change', () => {
      S.speed = parseFloat(dom.speedSelect.value);
      estimateFileSize();
    });
  }

  dom.outSizeSelect.addEventListener('change', () => {
    S.outputSize = parseInt(dom.outSizeSelect.value, 10);
    estimateFileSize();
  });

  // ─── Export Settings & File Size Estimation ───────────────────────────────
  
  function estimateFileSize() {
    if (!S.videoReady || !dom.vid.duration) return;
    const duration = dom.vid.duration / S.speed;
    // Base bitrate logic
    let bitrateKbps = 1500; // Base for 512x512 30FPS medium
    
    // Scale by size
    const sizeMultiplier = Math.pow(S.outputSize / 512, 2);
    // Scale by FPS
    const fpsMultiplier = S.fps / 30;
    // Scale by Quality
    let qualityMultiplier = 1.0;
    if (S.quality === 'low') qualityMultiplier = 0.5;
    if (S.quality === 'high') qualityMultiplier = 1.5;
    if (S.quality === 'ultra') qualityMultiplier = 2.5;
    
    // Format differences
    // GIF files are uncompressed/poorly compressed frame-by-frame bitmaps. They are HUGE.
    let formatMultiplier = S.exportFormat === 'gif' ? 12.0 : 1.0;
    if (S.pingPong) formatMultiplier *= 2;
    
    bitrateKbps = bitrateKbps * sizeMultiplier * fpsMultiplier * qualityMultiplier * formatMultiplier;
    
    const sizeKb = (bitrateKbps * duration) / 8;
    const sizeMb = sizeKb / 1024;
    
    if (sizeMb < 1) {
      dom.fileSizeEstimate.textContent = `~${Math.round(sizeKb)} KB`;
    } else {
      dom.fileSizeEstimate.textContent = `~${sizeMb.toFixed(1)} MB`;
    }
    
    // Color coding based on size
    if (sizeMb >= 24) {
      dom.fileSizeEstimate.style.color = '#ff4444'; // Red
    } else if (sizeMb >= 10) {
      dom.fileSizeEstimate.style.color = '#ffd700'; // Yellow
    } else {
      dom.fileSizeEstimate.style.color = '#3dd6f5'; // Default Blue
    }
  }

  dom.btnFormatWebm.addEventListener('click', () => {
    S.exportFormat = 'webm';
    dom.btnFormatWebm.classList.add('active');
    dom.btnFormatWebm.style.background = 'rgba(124,110,239,0.3)';
    dom.btnFormatWebm.style.border = 'none';
    
    dom.btnFormatGif.classList.remove('active');
    dom.btnFormatGif.style.background = 'transparent';
    dom.btnFormatGif.style.border = '1px solid rgba(255,255,255,0.1)';
    
    if (dom.btnExportText) {
      dom.btnExportText.setAttribute('data-i18n', 'btnExportWebm');
      dom.btnExportText.textContent = t('btnExportWebm');
    }
    estimateFileSize();
  });

  dom.btnFormatGif.addEventListener('click', () => {
    S.exportFormat = 'gif';
    dom.btnFormatGif.classList.add('active');
    dom.btnFormatGif.style.background = 'rgba(124,110,239,0.3)';
    dom.btnFormatGif.style.border = 'none';
    
    dom.btnFormatWebm.classList.remove('active');
    dom.btnFormatWebm.style.background = 'transparent';
    dom.btnFormatWebm.style.border = '1px solid rgba(255,255,255,0.1)';
    
    if (dom.btnExportText) {
      dom.btnExportText.setAttribute('data-i18n', 'btnExportGif');
      dom.btnExportText.textContent = t('btnExportGif');
    }
    estimateFileSize();
  });

  dom.fpsRange.addEventListener('input', () => {
    S.fps = parseInt(dom.fpsRange.value, 10);
    dom.fpsValLabel.textContent = S.fps;
    estimateFileSize();
  });

  dom.qualitySelect.addEventListener('change', () => {
    S.quality = dom.qualitySelect.value;
    estimateFileSize();
  });

  // Call estimation once on video load (can be hooked in video ready event)
  // For now just making it available.

  // ─── Complex Mask Rendering Helper ──────────────────────────────────────────
  function drawComplexFrame(ctx, source, s) {
    // 0. Background fill
    ctx.clearRect(0, 0, s, s);
    if (!S.bgTransparent) {
      ctx.fillStyle = S.bgColor;
      ctx.fillRect(0, 0, s, s);
    }

    // We create a temporary canvas to build the masked video
    const maskCanvas = document.createElement('canvas');
    maskCanvas.width = s;
    maskCanvas.height = s;
    const mCtx = maskCanvas.getContext('2d');

    // 1. Draw base mask
    mCtx.fillStyle = '#fff';
    buildMaskPath(mCtx, S.maskType, 0, 0, s);
    mCtx.fill();

    // Math for drawing cropped source with safe coordinates (supports >100% zoom)
    const scale = s / S.cropSize;
    const destX = -S.cropX * scale;
    const destY = -S.cropY * scale;
    const destW = S.naturalW * scale;
    const destH = S.naturalH * scale;

    // Frame Math
    const fx = S.frameX * scale;
    const fy = S.frameY * scale;
    const fw = s * S.frameScaleX;
    const fh = s * S.frameScaleY;

    // 2. Add Keep strokes
    if (S.keepCanvas && S.keepCanvas.width > 0) {
      mCtx.globalCompositeOperation = 'source-over';
      mCtx.drawImage(S.keepCanvas, destX, destY, destW, destH);
    }

    // 3. Remove Drop strokes
    if (S.dropCanvas && S.dropCanvas.width > 0) {
      mCtx.globalCompositeOperation = 'destination-out';
      mCtx.drawImage(S.dropCanvas, destX, destY, destW, destH);
    }

    // 4. Source-in the actual video into the mask
    mCtx.globalCompositeOperation = 'source-in';
    mCtx.drawImage(source, destX, destY, destW, destH);

    // 5. Draw the masked video onto main ctx
    ctx.drawImage(maskCanvas, 0, 0);

    // 6. Overlay the static frame if exists
    if (S.frameImg) {
      const frameScaleOutput = s / S.cropSize;
      const fX = S.frameX * frameScaleOutput;
      const fY = S.frameY * frameScaleOutput;
      const fW = s * S.frameScaleX;
      const fH = s * S.frameScaleY;
      ctx.drawImage(S.frameImg, fX, fY, fW, fH);
    }
  }

  // ─── Live preview loop ─────────────────────────────────────────────────────
  function startPreviewLoop() {
    if (S.rafId) cancelAnimationFrame(S.rafId);
    (function tick() {
      S.rafId = requestAnimationFrame(tick);
      if (!S.videoReady) return;

      const canvas = dom.previewCanvas;
      const ctx    = canvas.getContext('2d');
      const s      = canvas.width;

      try {
        drawComplexFrame(ctx, dom.vid, s);
      } catch (_) {}
    })();
  }



  // ─── Frame Extraction & Processing (Browser-side) ────────────────────────
  async function renderAllFrames() {
    dom.progressStage.textContent = t('progFrames');
    
    const v = document.createElement('video');
    v.src = URL.createObjectURL(S.file);
    v.muted = true;
    v.playsInline = true;
    await new Promise((resolve) => {
      v.onloadeddata = resolve;
      v.load();
    });

    const maxInputDuration = Math.min(v.duration, 15); // Ограничение на 15 секунд оригинала
    const outputDuration = maxInputDuration / S.speed;
    const totalFrames = Math.floor(outputDuration * S.fps);

    const canvas = document.createElement('canvas');
    canvas.width = S.outputSize;
    canvas.height = S.outputSize;
    const ctx = canvas.getContext('2d');

    let frames = [];
    
    // Извлекаем кадры с оригинального видео
    for (let i = 0; i < totalFrames; i++) {
      v.currentTime = (i / S.fps) * S.speed;
      await new Promise(r => {
        const handler = () => { v.removeEventListener('seeked', handler); r(); };
        v.addEventListener('seeked', handler);
      });

      try {
        drawComplexFrame(ctx, v, canvas.width);
      } catch(e) {
        console.error(e);
      }

      // Сохраняем прямо в ImageBitmap (не требует конвертации в PNG, работает мгновенно и без затрат памяти!)
      const bitmap = await createImageBitmap(canvas);
      frames.push(bitmap);

      const pct = Math.round((i / totalFrames) * 40);
      dom.progressPct.textContent = pct + '%';
      dom.progressFill.style.width = pct + '%';
    }

    URL.revokeObjectURL(v.src);

    // Добавляем Пинг-Понг (реверс)
    if (S.pingPong && frames.length > 0) {
      dom.progressStage.textContent = t('progReverse');
      const rev = [...frames].reverse();
      if (rev.length > 2) {
        rev.shift(); // убираем дубликат на стыке
        rev.pop();   // убираем дубликат на начале
      }
      frames = frames.concat(rev);
    }

    return frames;
  }

  // ─── Native MediaRecorder Encoding ──────────────────────────────────────────
  async function encodeWithMediaRecorder(frames) {
    return new Promise((resolve, reject) => {
      dom.progressStage.textContent = t('progWebm');
      
      const canvas = document.createElement('canvas');
      canvas.width = S.outputSize;
      canvas.height = S.outputSize;
      const ctx = canvas.getContext('2d');

      const stream = canvas.captureStream(S.fps);
      
      // Пытаемся использовать VP9, если не поддерживается - VP8
      let mimeType = 'video/webm; codecs=vp9';
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = 'video/webm; codecs=vp8';
      }

      // Битрейт зависит от размера, FPS и качества
      let baseBps = 1500000;
      const sizeMultiplier = Math.pow(S.outputSize / 512, 2);
      const fpsMultiplier = S.fps / 30;
      let qualityMultiplier = 1.0;
      if (S.quality === 'low') qualityMultiplier = 0.5;
      if (S.quality === 'high') qualityMultiplier = 1.5;
      if (S.quality === 'ultra') qualityMultiplier = 2.5;
      
      const targetBps = Math.round(baseBps * sizeMultiplier * fpsMultiplier * qualityMultiplier);

      const recorder = new MediaRecorder(stream, {
        mimeType: mimeType,
        videoBitsPerSecond: targetBps
      });

      const chunks = [];
      recorder.ondataavailable = e => {
        if (e.data && e.data.size > 0) chunks.push(e.data);
      };
      
      recorder.onstop = () => {
        const blob = new Blob(chunks, { type: mimeType });
        resolve(blob);
      };
      recorder.onerror = e => reject(e);

      recorder.start();

      const startTime = performance.now();
      const totalFrames = frames.length;
      let lastFrameIdx = -1;

      // Используем requestAnimationFrame для синхронизации кадров во времени
      function renderLoop() {
        const now = performance.now();
        const elapsed = now - startTime;
        const frameIdx = Math.floor((elapsed / 1000) * S.fps);

        if (frameIdx >= totalFrames) {
          recorder.stop();
          return;
        }

        if (frameIdx !== lastFrameIdx && frames[frameIdx]) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(frames[frameIdx], 0, 0);
          lastFrameIdx = frameIdx;
          
          const pct = 40 + Math.round((frameIdx / totalFrames) * 60);
          dom.progressPct.textContent = pct + '%';
          dom.progressFill.style.width = pct + '%';
        }

        requestAnimationFrame(renderLoop);
      }

      requestAnimationFrame(renderLoop);
    });
  }

  // ─── GIF JS Encoding ──────────────────────────────────────────────────────
  let gifWorkerBlobUrl = null;
  // Предзагружаем воркер GIF, чтобы обойти CORS при запуске
  fetch('https://cdn.jsdelivr.net/npm/gif.js/dist/gif.worker.js')
    .then(r => r.blob())
    .then(blob => {
      gifWorkerBlobUrl = URL.createObjectURL(blob);
    })
    .catch(err => console.warn('Не удалось загрузить GIF worker', err));

  async function encodeWithGifJs(frames) {
    return new Promise((resolve, reject) => {
      if (!gifWorkerBlobUrl) {
        return reject(new Error('Библиотека GIF еще не загрузилась. Попробуйте снова через пару секунд.'));
      }
      if (typeof GIF === 'undefined') {
        return reject(new Error('Библиотека gif.js не найдена.'));
      }
      
      dom.progressStage.textContent = t('progGif');
      
      const canvas = document.createElement('canvas');
      canvas.width = S.outputSize;
      canvas.height = S.outputSize;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      
      let q = 10;
      if (S.quality === 'low') q = 20;
      if (S.quality === 'high') q = 5;
      if (S.quality === 'ultra') q = 1;
      
      const gif = new GIF({
        workers: 4,
        quality: q,
        width: S.outputSize,
        height: S.outputSize,
        workerScript: gifWorkerBlobUrl,
        transparent: null, 
        background: S.bgTransparent ? '#222222' : S.bgColor
      });
      
      const delayMs = Math.round(1000 / S.fps);
      
      for (let i = 0; i < frames.length; i++) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        if (!S.bgTransparent) {
          ctx.fillStyle = S.bgColor;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(frames[i], 0, 0);
        } else {
          ctx.drawImage(frames[i], 0, 0);
          
          // Жесткий порог альфа-канала для GIF (отключает сглаживание краев, чтобы не было черной пиксельной грязи от дизеринга)
          const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imgData.data;
          for (let j = 0; j < data.length; j += 4) {
            if (data[j + 3] < 128) {
              data[j + 3] = 0; // Полностью прозрачный
            } else {
              data[j + 3] = 255; // Полностью непрозрачный
            }
          }
          ctx.putImageData(imgData, 0, 0);
        }
        
        gif.addFrame(ctx, { copy: true, delay: delayMs });
      }
      
      gif.on('progress', function(p) {
        const pct = 40 + Math.round(p * 60);
        dom.progressPct.textContent = pct + '%';
        dom.progressFill.style.width = pct + '%';
        dom.progressStage.textContent = t('progGifPct') + ' (' + Math.round(p * 100) + '%)...';
      });
      
      gif.on('finished', function(blob) {
        resolve(blob);
      });
      
      gif.render();
    });
  }

  function toggleEditorControls(disabled) {
    const panels = document.querySelectorAll('.editor-controls, .settings-list, .video-area, .file-bar');
    panels.forEach(p => {
      if (p) {
        p.style.opacity = disabled ? '0.5' : '1';
        p.style.pointerEvents = disabled ? 'none' : 'auto';
      }
    });
  }

  async function processVideo() {
    if (!S.file || S.processing) return;
    S.processing = true;
    syncExportBtn();
    toggleEditorControls(true);

    try {
      hide(dom.successBlock);
      show(dom.progressBlock);
      dom.progressFill.style.width = '0%';
      dom.progressPct.textContent  = '0%';
      dom.progressText.textContent = t('progPrep');
      dom.progressStage.textContent = '';

      // 1. Извлекаем и подготавливаем все кадры
      const frames = await renderAllFrames();

      let finalBlob;
      let outName;
      if (S.exportFormat === 'gif') {
        finalBlob = await encodeWithGifJs(frames);
        outName = S.file.name.replace(/\.[^.]+$/, '') + '_art.gif';
      } else {
        finalBlob = await encodeWithMediaRecorder(frames);
        outName = S.file.name.replace(/\.[^.]+$/, '') + '_token.webm';
      }

      // Auto-download
      const a = document.createElement('a');
      a.href     = URL.createObjectURL(finalBlob);
      a.download = outName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setTimeout(() => URL.revokeObjectURL(a.href), 5000);

      // Очистка кадров
      for (let i = 0; i < frames.length; i++) {
        frames[i].close(); // Очищаем память ImageBitmap
      }

      // Done
      dom.progressFill.style.width = '100%';
      dom.progressPct.textContent  = '100%';
      dom.progressText.textContent = t('progDone');
      dom.progressStage.textContent = '';
      dom.successName.textContent   = outName;
      show(dom.successBlock);
      show(dom.card5);

    } catch (err) {
      const msg = (err && (err.message || err.toString())) || String(err);
      dom.progressStage.textContent = '❌ ' + msg;
      dom.progressText.textContent  = t('progErr');
      console.error('[processVideo] Ошибка:', msg, err);
    } finally {
      S.processing = false;
      syncExportBtn();
      toggleEditorControls(false);
    }
  }

  // ─── Reset to initial state ────────────────────────────────────────────────
  function resetApp() {
    S.file       = null;
    S.videoReady = false;

    if (S.rafId) { cancelAnimationFrame(S.rafId); S.rafId = null; }
    if (dom.vid.src) URL.revokeObjectURL(dom.vid.src);
    dom.vid.src    = '';
    dom.fileInput.value = '';

    show(dom.dropzone);
    hide(dom.fileBar);
    hide(dom.card2);
    hide(dom.card3);
    hide(dom.card4);
    hide(dom.card5);
    dom.githubInput.value = '';
    dom.cdnOutput.value = '';
    hide(dom.progressBlock);
    hide(dom.successBlock);
    syncExportBtn();
  }

  // ─── Event bindings ────────────────────────────────────────────────────────
  const c0Header = $('card0Header');
  if (c0Header) {
    c0Header.addEventListener('click', () => {
      const c0Content = $('card0Content');
      const c0Icon = $('card0ToggleIcon');
      if (!c0Content || !c0Icon) return;
      if (c0Content.style.maxHeight === '0px') {
        c0Content.style.maxHeight = '2000px';
        c0Icon.style.transform = 'rotate(0deg)';
      } else {
        c0Content.style.maxHeight = '0px';
        c0Icon.style.transform = 'rotate(180deg)';
      }
    });
  }

  dom.dropzone.addEventListener('click', () => dom.fileInput.click());

  dom.fileInput.addEventListener('change', (e) => {
    if (e.target.files[0]) loadFile(e.target.files[0]);
  });

  dom.dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dom.dropzone.classList.add('dragover');
  });
  dom.dropzone.addEventListener('dragleave', () => dom.dropzone.classList.remove('dragover'));
  dom.dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dom.dropzone.classList.remove('dragover');
    loadFile(e.dataTransfer.files[0]);
  });

  dom.btnChangeFile.addEventListener('click', () => dom.fileInput.click());
  dom.btnExport.addEventListener('click', processVideo);
  dom.btnNewFile.addEventListener('click', resetApp);

  // Re-sync crop canvas if window resizes
  let _resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(_resizeTimer);
    _resizeTimer = setTimeout(() => {
      if (S.videoReady) { syncCropCanvasSize(); drawOverlay(); }
    }, 120);
  });

  // ─── Trim Video (No AI Mode) ────────────────────────────────────────────────
  if (dom.btnSelectTrimVideo) {
    dom.btnSelectTrimVideo.addEventListener('click', () => dom.trimInput.click());
    
    dom.trimInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      S.trimFile = file;
      dom.trimVid.src = URL.createObjectURL(file);
      dom.trimVid.onloadeddata = () => {
        S.trimStart = 0;
        S.trimEnd = dom.trimVid.duration;
        if (S.trimEnd < 3.0) S.trimEnd = 3.0; // Защита от слишком коротких
        if (dom.trimStartRange) { dom.trimStartRange.max = dom.trimVid.duration; dom.trimStartRange.value = S.trimStart; }
        if (dom.trimEndRange) { dom.trimEndRange.max = dom.trimVid.duration; dom.trimEndRange.value = S.trimEnd; }
        updateTrimUI();
        show(dom.trimUI);
      };
    });

    dom.btnSetTrimStart.addEventListener('click', () => {
      let val = dom.trimVid.currentTime;
      if (val > S.trimEnd - 3.0) val = Math.max(0, S.trimEnd - 3.0);
      S.trimStart = val;
      if (dom.trimStartRange) dom.trimStartRange.value = S.trimStart;
      updateTrimUI();
    });

    dom.btnSetTrimEnd.addEventListener('click', () => {
      let val = dom.trimVid.currentTime;
      if (val < S.trimStart + 3.0) val = Math.min(dom.trimVid.duration, S.trimStart + 3.0);
      S.trimEnd = val;
      if (dom.trimEndRange) dom.trimEndRange.value = S.trimEnd;
      updateTrimUI();
    });

    if (dom.trimStartRange) {
      dom.trimStartRange.addEventListener('input', () => {
        let val = parseFloat(dom.trimStartRange.value);
        if (val > dom.trimVid.duration - 3.0) val = Math.max(0, dom.trimVid.duration - 3.0);
        
        if (val > S.trimEnd - 3.0) {
          S.trimEnd = Math.min(dom.trimVid.duration, val + 3.0);
          if (val > S.trimEnd - 3.0) val = Math.max(0, S.trimEnd - 3.0);
          if (dom.trimEndRange) dom.trimEndRange.value = S.trimEnd;
        }
        
        S.trimStart = val;
        dom.trimStartRange.value = S.trimStart;
        dom.trimVid.currentTime = S.trimStart;
        updateTrimUI();
      });
    }

    if (dom.trimEndRange) {
      dom.trimEndRange.addEventListener('input', () => {
        let val = parseFloat(dom.trimEndRange.value);
        if (val < 3.0) val = Math.min(dom.trimVid.duration, 3.0);
        
        if (val < S.trimStart + 3.0) {
          S.trimStart = Math.max(0, val - 3.0);
          if (val < S.trimStart + 3.0) val = Math.min(dom.trimVid.duration, S.trimStart + 3.0);
          if (dom.trimStartRange) dom.trimStartRange.value = S.trimStart;
        }
        
        S.trimEnd = val;
        dom.trimEndRange.value = S.trimEnd;
        dom.trimVid.currentTime = S.trimEnd;
        updateTrimUI();
      });
    }

    dom.trimVid.addEventListener('timeupdate', () => {
      if (S.trimEnd > S.trimStart && dom.trimVid.currentTime >= S.trimEnd) {
        dom.trimVid.currentTime = S.trimStart;
        dom.trimVid.play().catch(e => {});
      }
    });

    function updateTrimUI() {
      if (dom.trimStartLabel) dom.trimStartLabel.textContent = S.trimStart.toFixed(2) + ' с';
      if (dom.trimEndLabel) dom.trimEndLabel.textContent = S.trimEnd.toFixed(2) + ' с';
      const dur = S.trimEnd - S.trimStart;
      const durTotal = dom.trimVid.duration || 1;
      
      if (dom.trimStartRange) {
        const invalidStartPct = Math.max(0, Math.min(100, ((S.trimEnd - 3.0) / durTotal) * 100));
        dom.trimStartRange.style.background = `linear-gradient(to right, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) ${invalidStartPct}%, rgba(255,0,0,0.4) ${invalidStartPct}%, rgba(255,0,0,0.4) 100%)`;
      }
      
      if (dom.trimEndRange) {
        const invalidEndPct = Math.max(0, Math.min(100, ((S.trimStart + 3.0) / durTotal) * 100));
        dom.trimEndRange.style.background = `linear-gradient(to right, rgba(255,0,0,0.4) 0%, rgba(255,0,0,0.4) ${invalidEndPct}%, rgba(255,255,255,0.1) ${invalidEndPct}%, rgba(255,255,255,0.1) 100%)`;
      }

      if (dom.trimDurationLabel) {
        dom.trimDurationLabel.textContent = 'Длительность: ' + dur.toFixed(2) + ' с';
        if (dur > 8) {
          dom.trimDurationLabel.style.color = '#ff4444';
        } else {
          dom.trimDurationLabel.style.color = '#3dd6f5';
        }
      }
    }

    dom.btnDoTrim.addEventListener('click', async () => {
      if (!S.trimFile || !S.ffmpegReady) return;
      
      show(dom.trimProgressBlock);
      dom.trimProgressText.textContent = 'Обрезка видео (FFmpeg)...';
      dom.trimProgressFill.style.width = '0%';
      
      dom.btnDoTrim.disabled = true;
      dom.btnSelectTrimVideo.disabled = true;
      
      try {
        const { fetchFile } = window.FFmpegUtil;
        const progressHandler = ({ progress }) => {
          dom.trimProgressFill.style.width = Math.round(progress * 100) + '%';
        };
        S.ffmpeg.on('progress', progressHandler);

        const ext = S.trimFile.name.split('.').pop().toLowerCase();
        const inName = 'input_trim.' + ext;
        const outName = 'output_trim.' + ext;

        await S.ffmpeg.writeFile(inName, await fetchFile(S.trimFile));
        
        // Trim video (without -c copy to ensure browser compatibility and fix keyframe issues)
        const dur = S.trimEnd - S.trimStart;
        await S.ffmpeg.exec([
          '-i', inName,
          '-ss', String(S.trimStart),
          '-t', String(dur),
          outName
        ]);

        const data = await S.ffmpeg.readFile(outName);
        let mimeType = 'video/mp4';
        if (ext === 'webm') mimeType = 'video/webm';
        
        const blob = new Blob([data.buffer], { type: mimeType });
        
        dom.trimProgressText.textContent = 'Сохранение в папку TEST...';
        
        // Upload to Node Server
        try {
          await fetch('/upload', {
            method: 'POST',
            body: blob
          });
        } catch (uploadErr) {
          // Игнорируем ошибку, если сервер не поддерживает загрузку
        }

        // Forward to the main application
        const trimmedFile = new File([blob], 'trimmed_video.' + ext, { type: mimeType });
        
        // Emulate drag&drop load
        loadFile(trimmedFile);
        
        // Hide Trim UI to focus on the main stage
        dom.trimVid.pause();
        hide(dom.trimUI);
        
        // Cleanup FFmpeg memory
        S.ffmpeg.off('progress', progressHandler);
        await S.ffmpeg.deleteFile(inName);
        await S.ffmpeg.deleteFile(outName);
        
        
      } catch (err) {
        console.error(err);
        dom.trimProgressText.textContent = '❌ Ошибка обрезки';
      } finally {
        dom.btnDoTrim.disabled = false;
        dom.btnSelectTrimVideo.disabled = false;
        setTimeout(() => hide(dom.trimProgressBlock), 3000);
      }
    });
  }

  // ─── Boot ──────────────────────────────────────────────────────────────────
  initFFmpeg();

  // ─── Github Link Converter ──────────────────────────────────────────────────
  if (dom.githubInput && dom.cdnOutput) {
    dom.githubInput.addEventListener('input', () => {
      let val = dom.githubInput.value.trim();
      if (!val) {
        dom.cdnOutput.value = '';
        return;
      }
      
      // Expected: https://github.com/ZhivchikZer/Foundry/blob/main/kling.webm
      // Target: https://cdn.jsdelivr.net/gh/ZhivchikZer/Foundry/kling.webm
      
      if (val.includes('github.com')) {
        val = val.replace('https://github.com/', 'https://cdn.jsdelivr.net/gh/');
        val = val.replace('/blob/main/', '/');
        val = val.replace('/blob/master/', '/');
      }
      dom.cdnOutput.value = val;
    });
    
    if (dom.btnCopyCdn) {
      dom.btnCopyCdn.addEventListener('click', () => {
        if (!dom.cdnOutput.value) return;
        navigator.clipboard.writeText(dom.cdnOutput.value)
          .then(() => {
            const oldText = dom.btnCopyCdn.textContent;
            dom.btnCopyCdn.textContent = t('copySuccess');
            setTimeout(() => {
              dom.btnCopyCdn.textContent = oldText;
            }, 2000);
          })
          .catch(err => console.error('Copy failed', err));
      });
    }
  }

})();
