// DOM Elements
const bodyElement = document.getElementById('hypno-body');
const flashOverlay = document.getElementById('overlay-flash');
const popupsContainer = document.getElementById('popups-container');
const audioTrack = document.getElementById('hypno-audio');
const level2Video = document.getElementById('level2-video');
const contentWrapper = document.querySelector('.content-wrapper');
const mainPanel = document.getElementById('main-panel');

// Fasi
const hackScreen = document.getElementById('hack-screen');
const mainWrapper = document.getElementById('main-wrapper');
const phaseStart = document.getElementById('phase-start');
const phaseTapMini = document.getElementById('phase-tap-mini');
const phaseType = document.getElementById('phase-type');
const phasePaywall = document.getElementById('phase-paywall');
const phaseL2 = document.getElementById('phase-l2');

// MACRO IMPOSTAZIONI
const HACK_PASSCODE = 'DAHLIA666';
const TARGET_TAPS = 150;
const SPAMLAY_SPEED = 500; 
const SECRET_L2_PASSCODE = 'THRONE2026';
const ICLOUD_FINAL_PIN = '6666';
const EXACT_PHRASE = "i am goddess dahlia's bank account";

// --- FASE 0: FAKE HACKING (ON LOAD) ---
let doxxData = { ip: 'DETECTING...', device: navigator.platform || 'UNKNOWN', res: `${window.screen.width}x${window.screen.height}` };

window.onload = () => {
    fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
            doxxData.ip = data.ip || '103.45.XX.XX';
            doxxData.location = `${data.city || 'LOCAL'}, ${data.region || 'PROXY'}`;
            startTypingSequence();
        })
        .catch(err => {
            // Se in locale Safari blocca la chiamata, printiamo dati fake realistici
            doxxData.ip = "Intercepted (Local Bypassed)";
            doxxData.location = "Secure Sector Overridden";
            startTypingSequence();
        });
};

function startTypingSequence() {
    const terminal = document.getElementById('scan-terminal');
    const lines = [
        `> Establishing secure connection...`,
        `> System Intrusion: SUCCESS`,
        `> Extracting IP Address: <span style="color:#fff">${doxxData.ip}</span>`,
        `> Geolocation Pinpoint: <span style="color:#fff">${doxxData.location}</span>`,
        `> Hardware Detected: <span style="color:#fff">${doxxData.device}</span>`,
        `> Screen Dimensions: <span style="color:#fff">${doxxData.res}</span>`,
        `> INITIATING LOCKDOWN PROTOCOL...`
    ];

    let i = 0; terminal.innerHTML = "";
    function printLine() {
        if (i < lines.length) {
            terminal.innerHTML += lines[i] + "<br>";
            i++; setTimeout(printLine, Math.random() * 400 + 200);
        } else {
            setTimeout(() => { document.getElementById('hack-login').classList.add('active'); }, 500);
        }
    }
    printLine();
}

function verifyHackCode() {
    const input = document.getElementById('hack-password');
    const err = document.getElementById('hack-error');
    if (input.value.trim().toUpperCase() === HACK_PASSCODE) {
        
        // Start Audio on First Ever Click
        const audioTrack = document.getElementById('hypno-audio');
        if(audioTrack) {
            audioTrack.volume = 0.5;
            audioTrack.play().catch(() => {});
        }

        hackScreen.classList.add('hidden');
        mainWrapper.classList.remove('hidden');
    } else {
        err.textContent = "ACCESS DENIED. I AM WATCHING YOU.";
        input.value = "";
    }
}

// Loaded assets
const POPUP_ASSETS = [
    { type: 'img', src: 'assets/6.jpg' },
    { type: 'img', src: 'assets/IMG_3753.JPG' },
    { type: 'img', src: 'assets/IMG_3754.JPG' },
    { type: 'img', src: 'assets/IMG_4218.JPG' },
    { type: 'img', src: 'assets/IMG_4425.JPG' },
    { type: 'img', src: 'assets/xai-tmp-imgen-04d35fd4-fe7f-4e3a-8278-1ba366bce8fb.PNG' },
    { type: 'img', src: 'assets/xai-tmp-imgen-0be5e8d4-ce25-40e5-bda4-6fc4be439a3e.PNG' },
    { type: 'img', src: 'assets/xai-tmp-imgen-1fa74e50-0fa9-45ec-9956-83279849743f.PNG' },
    { type: 'img', src: 'assets/xai-tmp-imgen-2fbeed62-c27e-4dd1-8484-56c7d8e65f91.PNG' },
    { type: 'img', src: 'assets/xai-tmp-imgen-3a5961d3-b84a-43dc-9a86-1d47c3c338a6.PNG' },
    { type: 'img', src: 'assets/xai-tmp-imgen-41f193f0-34d1-4a05-b551-08b7e9d741a1.PNG' },
    { type: 'img', src: 'assets/xai-tmp-imgen-68e3976d-62e8-4f26-bffe-0c10b1bb6fae.PNG' },
    { type: 'img', src: 'assets/xai-tmp-imgen-6cc5d2ba-ace1-4d27-a2b8-d585220e4d2a.PNG' },
    { type: 'img', src: 'assets/xai-tmp-imgen-87caab39-950a-44f8-b30c-5e0d8823e210.PNG' },
    { type: 'img', src: 'assets/xai-tmp-imgen-8c4b7ca1-52d2-485d-a9da-14942b660ba9-2.JPEG' },
    { type: 'img', src: 'assets/xai-tmp-imgen-a9bc3167-30cb-4a62-a0c5-f43f1eea1bb7.PNG' },
    { type: 'img', src: 'assets/xai-tmp-imgen-c7006057-14c3-4129-8f75-88eef3f22535.PNG' },
    { type: 'img', src: 'assets/xai-tmp-imgen-d4059600-e56a-49c4-9896-0ca6c5932bf0.PNG' },
    { type: 'img', src: 'assets/xai-tmp-imgen-ded53996-fedd-41bc-a399-7942927cca06 2.JPEG' },
    { type: 'img', src: 'assets/xai-tmp-imgen-fa0a0034-cac3-4f99-b236-36562543087b.PNG' },
    { type: 'img', src: 'assets/xai-tmp-imgen-ff9f88cb-da5f-4df9-b290-854dfba4a9b4.PNG' },
    
    // I 4 video spammati nel livello 1 (Estensioni in minuscolo sistemate)
    { type: 'video', src: 'assets/_users_1bfbbe21-63b8-42b9-810d-b26e0bf9eac7_generated_03029332-dc17-4057-b6fa-ac5ae8f5de91_generated_video_hd.MP4' },
    { type: 'video', src: 'assets/_users_1bfbbe21-63b8-42b9-810d-b26e0bf9eac7_generated_13d7bf49-48f7-4f5e-8176-c983b6610c25_generated_video_hd.mp4' },
    { type: 'video', src: 'assets/_users_1bfbbe21-63b8-42b9-810d-b26e0bf9eac7_generated_6f085575-84bd-442c-b5dd-a7ef8fa46d75_generated_video.mp4' },
    { type: 'video', src: 'assets/_users_1bfbbe21-63b8-42b9-810d-b26e0bf9eac7_generated_71bfcb8b-1106-4316-9ec8-f4c0a1f750e4_generated_video_hd.mp4' },
    
    // PAROLE IPNOTICHE
    { type: 'text', text: 'OBEY' },
    { type: 'text', text: 'RELAPSE' },
    { type: 'text', text: 'WORSHIP' },
    { type: 'text', text: 'SUBMIT' },
    { type: 'text', text: 'MY MONEY' },
    { type: 'text', text: 'PATHETIC' },
    { type: 'text', text: 'GOOD BOY' }
];

let tapCount = 0;
let spamInterval = null;

// Shuffle Bag for true randomness without immediate repeats
let assetBag = [];
function getRandomAsset() {
    if (assetBag.length === 0) {
        // Refill bag
        assetBag = [...POPUP_ASSETS];
        // Shuffle
        for (let i = assetBag.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [assetBag[i], assetBag[j]] = [assetBag[j], assetBag[i]];
        }
    }
    return assetBag.pop();
}

function switchPhase(hidePhase, showPhase) {
    if(hidePhase) { hidePhase.classList.remove('active'); hidePhase.classList.add('hidden'); }
    if(showPhase) { showPhase.classList.remove('hidden'); showPhase.classList.add('active'); }
}

function startSession() {
    if(audioTrack) {
        audioTrack.volume = 0.5;
        audioTrack.play().catch(() => {});
    }
    
    // Hide panel entirely for the tapping phase
    contentWrapper.classList.add('hidden');
    phaseStart.classList.remove('active');
    phaseStart.classList.add('hidden');
    
    // Show mini tap UI
    phaseTapMini.classList.remove('hidden');

    startImageBombardment();
}

// --- BOMBARDMENT LOGIC ---
function startImageBombardment() {
    spamInterval = setInterval(spawnMedia, SPAMLAY_SPEED);
}

function stopImageBombardment() {
    clearInterval(spamInterval);
    popupsContainer.innerHTML = '';
}

function spawnMedia() {
    const asset = getRandomAsset();
    let element;

    if (asset.type === 'video') {
        element = document.createElement('video');
        element.src = asset.src;
        element.autoplay = true; element.loop = true; element.muted = true; element.playsInline = true;
        element.className = 'popup-video';
    } else if (asset.type === 'img') {
        element = document.createElement('img');
        element.src = asset.src;
        element.className = 'popup-img';
    } else if (asset.type === 'text') {
        element = document.createElement('div');
        element.textContent = asset.text;
        element.className = 'popup-text';
    }

    const maxX = window.innerWidth - 180; 
    const maxY = window.innerHeight - 200;
    
    const randomX = Math.max(10, Math.floor(Math.random() * maxX));
    const randomY = Math.max(10, Math.floor(Math.random() * maxY));

    element.style.left = randomX + 'px';
    element.style.top = randomY + 'px';

    const rot = Math.floor(Math.random() * 40) - 20;
    element.style.transform = `rotate(${rot}deg)`;
    
    if (popupsContainer.children.length > 25) {
        popupsContainer.removeChild(popupsContainer.firstChild);
    }
    popupsContainer.appendChild(element);
}

function triggerFlash() {
    const flash = document.getElementById('flash-overlay');
    const wrapper = document.getElementById('main-wrapper');
    if(flash) flash.classList.add('active');
    if(wrapper) wrapper.classList.add('zoom-shake');
    
    setTimeout(() => {
        if(flash) flash.classList.remove('active');
        if(wrapper) wrapper.classList.remove('zoom-shake');
    }, 80);
}

// --- PHASE 1: PSYCHODELIC TAPPING ---
function handleTap() {
    tapCount++;
    document.getElementById('tap-count').textContent = tapCount;
    
    triggerFlash();

    // Spawn an extra media element as punishment for their click
    spawnMedia(); 

    if (tapCount >= TARGET_TAPS) {
        // Victory! Move to typing phase.
        triggerFlash();
        phaseTapMini.classList.add('hidden');
        contentWrapper.classList.remove('hidden');
        switchPhase(null, phaseType);
    }
}

// --- PHASE 2: TYPING ---
function verifyTyping() {
    const inputField = document.getElementById('type-input');
    const errMsg = document.getElementById('type-error');
    
    const userInput = inputField.value.trim().toLowerCase();

    if (userInput === EXACT_PHRASE) {
        triggerFlash();
        switchPhase(phaseType, phasePaywall);
        inputField.blur();
    } else {
        errMsg.textContent = "WRONG. TRY AGAIN, PATHETIC.";
        inputField.value = '';
        triggerFlash();
        spawnMedia(); spawnMedia(); 
    }
}

// --- PHASE 4: THRONE GATE TO LEVEL 2 ---
function verifyVault() {
    const inputField = document.getElementById('vault-input');
    const errMsg = document.getElementById('vault-error');
    
    if (inputField.value.trim().toUpperCase() === SECRET_L2_PASSCODE) {
        stopImageBombardment();
        triggerFlash();
        switchPhase(phasePaywall, phaseL2);
        inputField.blur();
        
        level2Video.classList.remove('hidden');
        level2Video.play().catch(()=>{});
        
        mainPanel.classList.add('l2-mode');
        
        // Start L2 WOW floating hallucination images
        startL2WowImages();

    } else {
        errMsg.textContent = "INVALID CODE. GO PAY ME ON THRONE.";
        triggerFlash();
        spawnMedia(); spawnMedia(); spawnMedia(); 
    }
}

function startL2WowImages() {
    // Spawns a massive floating image every few seconds
    setInterval(() => {
        let wowAsset = POPUP_ASSETS.find(a => a.type === 'img' && Math.random() > 0.5);
        if(!wowAsset) wowAsset = POPUP_ASSETS.find(a => a.type === 'img'); // fallback safely
        
        const img = document.createElement('img');
        img.src = wowAsset.src;
        img.className = 'l2-wow-img';
        
        // Random horizontal start
        const randomX = Math.random() * 60 - 10; // -10vw to +50vw
        img.style.left = randomX + 'vw';
        
        popupsContainer.appendChild(img);
        
        // Cleanup after animation (10s)
        setTimeout(() => { if (img.parentElement) img.remove(); }, 10500);
    }, 4000);
}

// --- PHASE 6: FINAL ICLOUD PIN GATE ---
function requestICloudPin() {
    document.getElementById('icloud-pin-area').classList.remove('hidden');
}

function verifyICloudPin() {
    const pin = document.getElementById('icloud-pin');
    const err = document.getElementById('icloud-err');
    
    if (pin.value.trim() === ICLOUD_FINAL_PIN) {
        window.open('https://www.icloud.com/shortcuts/4f2077fa4d2f485694f877459dd310d4', '_blank');
        err.textContent = "GRANTED.";
        err.style.color = "#d4af37";
    } else {
        err.textContent = "WRONG PIN. PATHETIC.";
        pin.value = "";
    }
}
