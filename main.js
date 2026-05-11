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
const filterBtns = document.querySelectorAll('.filter-btn');
const clearBtn = document.getElementById('clear-btn');
const copyBtn = document.getElementById('copy-btn');

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
        const timeStr = rule.time === Infinity ? 'PERMANENTE' : formatTimeLabel(rule.time);
        
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

function formatTimeLabel(mins) {
    if (mins < 60) return `${mins} min`;
    if (mins < 1440) return `${mins / 60} h`;
    return `${mins / 1440} d`;
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
            copyBtn.innerText = "Copiar Baneo";
            
            let humanStr = "";
            if (days > 0) humanStr += `${days} día${days > 1 ? 's' : ''} `;
            if (remHours > 0) humanStr += `${remHours} hora${remHours > 1 ? 's' : ''} `;
            if (mins > 0) humanStr += `${mins} minuto${mins > 1 ? 's' : ''}`;
            totalHuman.innerText = humanStr.trim() || "0 minutos";
        } else {
            totalDisplay.innerText = `${totalMins} MINUTOS`;
            totalDisplay.style.color = "white";
            copyBtn.innerText = "Copiar /jail";
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
        updateUI();
        renderRules();
    });

    copyBtn.addEventListener('click', () => {
        if (selectedRules.length === 0) return;
        
        const userId = userIdInput.value || "ID";
        let totalMins = 0;
        let isPermanent = false;
        let reasons = [];

        selectedRules.forEach(r => {
            if (r.time === Infinity) isPermanent = true;
            else totalMins += r.time;
            reasons.push(r.name);
        });

        const isBanFormat = totalMins > 240 || selectedRules.some(r => r.type === 'ban') || isPermanent;
        
        let textToCopy = "";
        
        if (isBanFormat) {
            textToCopy = `ID: ${userId}\nDuracion: ${isPermanent ? 'Permanente' : totalHuman.innerText}\nRazón de la sanción: ${reasons.join(', ')}`;
        } else {
            textToCopy = `/jail ${userId} ${totalMins} ${reasons.join(' ')}`;
        }
        
        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = copyBtn.innerText;
            copyBtn.innerText = "¡Copiado!";
            copyBtn.style.background = "var(--success-color)";
            setTimeout(() => {
                copyBtn.innerText = originalText;
                copyBtn.style.background = "var(--accent-primary)";
            }, 2000);
        });
    });
}

init();
