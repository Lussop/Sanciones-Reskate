const rules = [
    { name: "Mentir en /DO", time: 30, unit: "m", type: "jail" },
    { name: "Campear/Esconder Cuerpo", time: 30, unit: "m", type: "jail" },
    { name: "Mal uso del /DO, /ME, /GR, /ANON", time: 30, unit: "m", type: "jail" },
    { name: "Mentir en Negociación", time: 40, unit: "m", type: "jail" },
    { name: "Campear Punto", time: 40, unit: "m", type: "jail" },
    { name: "VDM", time: 40, unit: "m", type: "jail" },
    { name: "MG", time: 40, unit: "m", type: "jail" },
    { name: "PG", time: 40, unit: "m", type: "jail" },
    { name: "Abuso/Bugear Animación", time: 45, unit: "m", type: "jail" },
    { name: "Robo sin mínimo de PFA/Civil", time: 50, unit: "m", type: "jail" },
    { name: "Insultos al Staff", time: 60, unit: "m", type: "jail" },
    { name: "Uso de Casco Tank", time: 60, unit: "m", type: "jail" },
    { name: "DM", time: 60, unit: "m", type: "jail" },
    { name: "Cachear Objetos No Permitidos", time: 90, unit: "m", type: "jail" },
    { name: "IOOC", time: 100, unit: "m", type: "jail" },
    { name: "Invasión de Sede", time: 100, unit: "m", type: "jail" },
    { name: "Retomar Rol", time: 120, unit: "m", type: "jail" },
    { name: "Hacerse pasar por Facción Legal", time: 150, unit: "m", type: "jail" },
    { name: "Mal Posicionamiento de Tirador", time: 60, unit: "m", type: "jail" },
    { name: "Mal uso de Vehículo de Trabajo", time: 120, unit: "m", type: "jail" },
    { name: "Buscar Tirador antes de Cortar Negociaciones", time: 120, unit: "m", type: "jail" },
    { name: "Meterse/Salirse a/de un Robo en Progreso", time: 240, unit: "m", type: "jail" },
    { name: "Salirse de Rol", time: 240, unit: "m", type: "jail" },
    { name: "Robar a Trabajadores", time: 240, unit: "m", type: "jail" },
    { name: "No Respetar PK", time: 240, unit: "m", type: "jail" },
    { name: "Meterse en Rol Ajeno", time: 240, unit: "m", type: "jail" },
    { name: "Forzar Rol", time: 240, unit: "m", type: "jail" },
    { name: "Cachear en Robo mientras está siendo Robado", time: 240, unit: "m", type: "jail" },
    { name: "No Respetar Negociaciones", time: 240, unit: "m", type: "jail" },
    { name: "No Rol de Entorno (NRDE)", time: 180, unit: "m", type: "jail" },
    { name: "Romper Pared", time: 120, unit: "m", type: "jail", note: "1h Ban o 2h Jail" },
    { name: "Secuestrar sin Mínimo de PFA/Civil", time: 240, unit: "m", type: "jail", note: "2h Ban o 4h Jail" },
    { name: "No Valorar Vida", time: 240, unit: "m", type: "jail", note: "2h Ban o 4h Jail" },
    { name: "Rolear de Mafia con Civiles", time: 120, unit: "m", type: "ban" },
    { name: "Revenge Kill (RK)", time: 360, unit: "m", type: "ban" },
    { name: "No Rol (NRL)", time: 360, unit: "m", type: "ban" },
    { name: "No Cumplir con Límite Mínimo/Máximo de Robo", time: 360, unit: "m", type: "ban" },
    { name: "Iniciar Rol Agresivo desde Vehículo", time: 480, unit: "m", type: "ban" },
    { name: "No Respetar Zona de Tiroteo", time: 480, unit: "m", type: "ban" },
    { name: "Matar/Disparar antes de Cortar Negociaciones", time: 480, unit: "m", type: "ban" },
    { name: "Matar/Disparar antes de Tiroteo", time: 480, unit: "m", type: "ban" },
    { name: "Realizar Robo Fuera de Horario", time: 720, unit: "m", type: "ban" },
    { name: "Irse de Robo sin Negociar", time: 720, unit: "m", type: "ban" },
    { name: "Evadir Rol", time: 1440, unit: "m", type: "ban" },
    { name: "Matar SAME", time: 1440, unit: "m", type: "ban" },
    { name: "Abuso de Menú Faccionario", time: 1440, unit: "m", type: "ban" },
    { name: "Sobornar para no Reportar", time: 2880, unit: "m", type: "ban" },
    { name: "Amenazar para Evitar Sanciones", time: 4320, unit: "m", type: "ban" },
    { name: "Atentado", time: 1440, unit: "m", type: "ban" },
    { name: "Hacerse pasar por Staff", time: 7200, unit: "m", type: "ban" },
    { name: "Abuso de Bugs/Binds", time: 720, unit: "m", type: "ban" },
    { name: "Trolling", time: 2880, unit: "m", type: "ban" },
    { name: "Rol de Humillación", time: 2880, unit: "m", type: "ban" },
    { name: "Divulgación de información personal (Dox/Doxing)", time: Infinity, unit: "perm", type: "ban" },
    { name: "Robo de Stock de Mafia", time: 36000, unit: "m", type: "ban" },
    { name: "Hacerse pasar por Head-Staff", time: Infinity, unit: "perm", type: "ban" },
    { name: "Uso de Programas externos & Cheats", time: Infinity, unit: "perm", type: "ban" },
    { name: "Venta IC por Dinero OOC", time: Infinity, unit: "perm", type: "ban" }
];

let selectedRules = [];
let currentFilter = 'all';
let searchQuery = '';

// Elements
const rulesList = document.getElementById('rules-list');
const selectedItemsList = document.getElementById('selected-items');
const totalDisplay = document.getElementById('total-display');
const totalHuman = document.getElementById('total-human');
const totalRaw = document.getElementById('total-time-raw');
const searchInput = document.getElementById('rule-search');
const userIdInput = document.getElementById('user-id');
const userNameInput = document.getElementById('user-name');
const userSteamInput = document.getElementById('user-steam');
const userEvidenceInput = document.getElementById('user-evidence');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearBtn = document.getElementById('clear-btn');
const copyBtn = document.getElementById('copy-btn');
const copyTemplateBtn = document.getElementById('copy-template-btn');

// Initialize
function init() {
    renderRules();
    setupEventListeners();
}

function renderRules() {
    const filtered = rules.filter(rule => {
        const matchesSearch = rule.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFilter = currentFilter === 'all' || rule.type === currentFilter;
        return matchesSearch && matchesFilter;
    });

    rulesList.innerHTML = filtered.map((rule, index) => {
        const isSelected = selectedRules.some(r => r.name === rule.name);
        const timeStr = formatTimeLabel(rule.time, rule.type);
        
        return `
            <div class="rule-card ${isSelected ? 'selected' : ''}" onclick="toggleRule('${rule.name}')">
                <div class="rule-info">
                    <h4>${rule.name}</h4>
                    <div class="rule-tags">
                        <span class="tag ${rule.type}">${rule.type}</span>
                        <span class="tag time">${timeStr}</span>
                        ${rule.note ? `<span class="tag note">${rule.note}</span>` : ''}
                    </div>
                </div>
                <div class="rule-action">
                    ${isSelected ? 'Quitar' : 'Añadir'}
                </div>
            </div>
        `;
    }).join('');
}

function formatTimeLabel(mins, type) {
    if (mins === Infinity) return 'PERMANENTE';

    // Si es tipo jail, forzamos MINUTOS siempre
    if (type === 'jail') {
        return `${mins} min`;
    }

    // Para baneos, usamos horas o días
    if (mins < 1440) {
        const h = mins / 60;
        return Number.isInteger(h) ? `${h}h` : `${h.toFixed(1)}h`;
    }

    const d = mins / 1440;
    return Number.isInteger(d) ? `${d}d` : `${d.toFixed(1)}d`;
}

window.toggleRule = (ruleName) => {
    const rule = rules.find(r => r.name === ruleName);
    const index = selectedRules.findIndex(r => r.name === ruleName);

    if (index > -1) {
        selectedRules.splice(index, 1);
    } else {
        selectedRules.push(rule);
    }

    updateUI();
    renderRules();
};

function updateUI() {
    // Update selected items list
    if (selectedRules.length === 0) {
        selectedItemsList.innerHTML = '<p class="empty-msg">No hay infracciones seleccionadas</p>';
    } else {
        selectedItemsList.innerHTML = selectedRules.map(rule => `
            <div class="selected-item">
                <span>${rule.name}</span>
                <button class="remove-btn" onclick="toggleRule('${rule.name}')">&times;</button>
            </div>
        `).join('');
    }

    // Calculate totals
    let totalMins = 0;
    let isPermanent = false;

    selectedRules.forEach(r => {
        if (r.time === Infinity) isPermanent = true;
        else totalMins += r.time;
    });

    const hasBanInfraccion = selectedRules.some(r => r.type === 'ban');
    const isOverLimit = totalMins > 240;
    const isBanFormat = isOverLimit || hasBanInfraccion || isPermanent;

    if (isPermanent) {
        totalDisplay.innerText = "PERMANENTE";
        totalHuman.innerText = "Sanción sin retorno";
        totalRaw.innerText = "∞";
        copyBtn.innerText = "Copiar Baneo";
        totalDisplay.style.color = "var(--ban-color)";
    } else {
        const hours = Math.floor(totalMins / 60);
        const mins = totalMins % 60;
        const days = Math.floor(hours / 24);
        const remHours = hours % 24;

        if (isBanFormat) {
            totalDisplay.innerText = hours > 0 ? `${hours}H ${mins}M` : `${mins} MINUTOS`;
            totalDisplay.style.color = "var(--ban-color)";
            
            let humanStr = "";
            if (days > 0) humanStr += `${days} día${days > 1 ? 's' : ''} `;
            if (remHours > 0) humanStr += `${remHours} hora${remHours > 1 ? 's' : ''} `;
            if (mins > 0) humanStr += `${mins} minuto${mins > 1 ? 's' : ''}`;
            totalHuman.innerText = humanStr.trim() || "0 minutos";
        } else {
            totalDisplay.innerText = `${totalMins} MINUTOS`;
            totalDisplay.style.color = "white";
            totalHuman.innerText = totalMins === 0 ? "Selecciona una infracción" : "Formato de Cárcel Activo";
        }
        
        totalRaw.innerText = `${totalMins} min`;
    }
}

function setupEventListeners() {
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderRules();
    });

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderRules();
        });
    });

    clearBtn.addEventListener('click', () => {
        selectedRules = [];
        userIdInput.value = '';
        userNameInput.value = '';
        userSteamInput.value = '';
        userEvidenceInput.value = '';
        updateUI();
        renderRules();
    });

    copyBtn.addEventListener('click', () => {
        if (selectedRules.length === 0) return;
        
        const userId = userIdInput.value || "ID";
        let totalMins = 0;
        selectedRules.forEach(r => { totalMins += (r.time === Infinity ? 0 : r.time); });
        const reasons = selectedRules.map(r => r.name);

        const textToCopy = `/jail ${userId} ${totalMins} ${reasons.join(' ')}`;
        
        copyToClipboard(textToCopy, copyBtn);
    });

    copyTemplateBtn.addEventListener('click', () => {
        if (selectedRules.length === 0) return;
        
        const userId = userIdInput.value || "ID";
        const nombre = userNameInput.value || "No especificado";
        const steam = userSteamInput.value || "No especificado";
        const evidencia = userEvidenceInput.value || "No adjunta";
        
        let totalMins = 0;
        let isPermanent = false;
        selectedRules.forEach(r => {
            if (r.time === Infinity) isPermanent = true;
            else totalMins += r.time;
        });

        const duracion = isPermanent ? 'Permanente' : totalHuman.innerText;
        const razon = selectedRules.map(r => r.name).join(', ');

        const textToCopy = `nombre: ${nombre}\nsteam: ${steam}\nEvidencia: ${evidencia}\nID: ${userId}\nDuracion: ${duracion}\nRazón de la sanción: ${razon}`;
        
        copyToClipboard(textToCopy, copyTemplateBtn);
    });
}

function copyToClipboard(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.innerText;
        btn.innerText = "¡Copiado!";
        const originalBg = btn.style.background;
        btn.style.background = "var(--success-color)";
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.background = originalBg;
        }, 2000);
    });
}

init();
