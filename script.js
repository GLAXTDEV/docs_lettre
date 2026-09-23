// ==========================================
// BASE DE DONNÉES DES MODÈLES (INCLUANT L'ADMINISTRATIF)
// ==========================================
const templates = {
    // CATEGORIE: ADMINISTRATIF
    piece_admin: {
        category: 'administratif',
        layout: 'formal',
        objet: "Demande de délivrance d'un acte / pièce administrative",
        salutation: "Monsieur le Maire / Madame la Directrice,",
        corps: "Par la présente, je sollicite la délivrance d'une copie intégrale (ou extrait avec filiation) de ma pièce administrative : [Type de document : Acte de naissance / Casier judiciaire / Certificat de résidence].\n\nNom et Prénom : [Nom Prénom]\nDate et Lieu de Naissance : [JJ/MM/AAAA] à [Lieu]\nNoms des parents : [Nom du père] et [Nom de la mère]\n\nCe document m'est indispensable pour l'accomplissement de démarches administratives. Vous trouverez ci-joint la copie de ma pièce d'identité en cours de validité ainsi qu'une enveloppe timbrée pour le retour.",
        politesse: "Je vous remercie par avance pour le traitement de ma demande et vous prie d'agréer mes salutations distinguées."
    },
    conge: {
        category: 'administratif',
        layout: 'formal',
        objet: "Demande de congé / Autorisation d'absence exceptionnelle",
        salutation: "Madame, Monsieur le Directeur / Responsable des Ressources Humaines,",
        corps: "Par la présente, je sollicite une autorisation d'absence / un congé de [Durée ou Nombre de jours] pour la période du [Date de début] au [Date de fin] inclus.\n\nCette demande est motivée par [Motif : raison personnelle / impératif familial / événements exceptionnels].\n\nJe veillerai à finaliser les dossiers en cours avant mon départ et à transmettre les consigne nécessaires à mes collaborateurs afin d'assurer la continuité de service.",
        politesse: "Restant à votre disposition pour tout entretien, je vous prie d'agréer l'expression de mes salutations respectueuses."
    },
    reclamation_admin: {
        category: 'administratif',
        layout: 'formal',
        objet: "Réclamation et contestation concernant [Référence facture / Avis]",
        salutation: "Madame, Monsieur le Responsable du Service Client / Contentieux,",
        corps: "Je me permets de vous adresser cette lettre afin de porter réclamation suite à la réception du document cité en référence (Avis n° [Numéro du document] du [Date]).\n\nEn effet, après vérification, il apparaît une erreur concernant [Explication du litige : montant injustifié / anomalie de facturation / non-réception d'un service].\n\nJe vous demande par conséquent de bien vouloir procéder à la révision de mon dossier et à la régularisation de la situation dans les meilleurs délais.",
        politesse: "Dans l'attente de votre prompt retour, je vous prie d'agréer, Madame, Monsieur, mes salutations distinguées."
    },
    demission: {
        category: 'administratif',
        layout: 'formal',
        objet: "Notification de démission / Résiliation de contrat",
        salutation: "Madame, Monsieur le Directeur,",
        corps: "Par cette lettre, je vous informe de ma décision de démissionner de mon poste de [Intitulé du poste] au sein de votre organisme / entreprise.\n\nConformément aux dispositions de mon contrat, je respecterai un préavis de [Durée du préavis : ex: 1 mois / 3 mois], qui débutera à la date de réception de ce courrier. Mon contrat prendra donc fin le [Date de fin].\n\nJe vous demanderai de bien vouloir préparer à cette date mon reçu pour solde de tout compte, mon attestation d'emploi ainsi que mon certificat de travail.",
        politesse: "Je vous remercie pour l'opportunité qui m'a été accordée et vous prie d'agréer mes salutations distinguées."
    },
    attestation_honneur: {
        category: 'administratif',
        layout: 'formal',
        objet: "Attestation sur l'honneur de domicile / de situation",
        salutation: "À qui de droit,",
        corps: "Je soussigné(e), [Prénom Nom], résidant au [Adresse complète], atteste sur l'honneur par la présente la véracité des faits suivants :\n\n[Déclarer les faits précis, ex: que j'héberge à titre gratuit M./Mme... à mon domicile depuis le... / que je ne perçois aucune autre allocation...].\n\nJe suis pleinement informé(e) que cette attestation pourra être produite en justice et que toute fausse déclaration m'expose à des sanctions pénales.",
        politesse: "Fait pour servir et valoir ce que de droit."
    },
    recours: {
        category: 'administratif',
        layout: 'formal',
        objet: "Recours gracieux suite à la décision du [Date de la décision]",
        salutation: "Monsieur le Directeur / Madame la Responsable,",
        corps: "J'ai l'honneur de solliciter par la présente un recours gracieux à l'encontre de votre décision notifiée le [Date de notification] concernant [Objet de la décision contestée].\n\nJe souhaite porter à votre connaissance les éléments suivants qui n'ont pas pu être pris en compte lors du premier examen : [Exposer brièvement les nouveaux arguments ou motifs humanitaires/techniques].\n\nAu vu de ces pièces complémentaires ci-jointes, je vous demande bien vouloir réexaminer favorablement ma situation.",
        politesse: "En vous remerciant de l'attention bienveillante que vous porterez à ma demande, je vous prie d'agréer mes salutations distinguées."
    },

    // CATEGORIE: ACADÉMIQUE
    stage: {
        category: 'académique',
        layout: 'formal',
        objet: "Demande de stage académique pour la période de [Mois / Année]",
        salutation: "Madame, Monsieur le Directeur des Ressources Humaines,",
        corps: "Actuellement étudiant(e) inscrite en formation au sein de notre établissement, je vous adresse la présente candidature afin de solliciter un stage académique au sein de votre structure.\n\nDans le cadre de mon cursus universitaire, ce stage pratique d'une durée de [Durée ex: 2 mois] me permettra d'appliquer les connaissances théoriques acquises durant mes études et d'acquérir une expérience professionnelle significative dans votre secteur d'activité.\n\nRigoureux(se), motivé(e) et enthousiaste à l'idée d'apporter ma contribution à vos projets, je me tiens à votre entière disposition pour tout entretien à la convenance de votre agenda.",
        politesse: "Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées."
    },
    absence: {
        category: 'académique',
        layout: 'formal',
        objet: "Justificatif d'absence / Demande de permission exceptionnelle",
        salutation: "Monsieur le Proviseur / Madame la Directrice des Études,",
        corps: "Par la présente, je sollicite votre bienveillance afin de vous informer de mon impossibilité d'assister aux cours prévus du [Date de début] au [Date de fin].\n\nCette absence est justifiée par [Raison : motifs médicaux / impératif familial majeur / convocation officielle]. Vous trouverez ci-joint la pièce justificative attestant de cette situation.\n\nJe m'engage fermement à rattraper l'ensemble des cours et travaux dirigés manqués durant cette période auprès de mes camarades de promotion.",
        politesse: "En vous remerciant par avance pour votre compréhension, je vous prie de recevoir mes salutations respectueuses."
    },
    attestation: {
        category: 'académique',
        layout: 'formal',
        objet: "Demande d'attestation de scolarité et de relevé de notes",
        salutation: "Monsieur le Responsable du Service de la Scolarité,",
        corps: "Actuellement inscrit(e) au sein de votre établissement sous le numéro d'étudiant mentionné en en-tête, je sollicite par la présente la délivrance d'un relevé de notes officiel ainsi qu'une attestation de scolarité pour l'année académique en cours.\n\nCes documents officiels me sont exigés dans le cadre de la constitution d'un dossier administratif indispensable.\n\nJe vous remercie par avance pour la promptitude avec laquelle vous traiterez ma demande.",
        politesse: "Veuillez agréer, Monsieur, l'assurance de ma haute considération."
    },
    motivation: {
        category: 'académique',
        layout: 'formal',
        objet: "Candidature pour l'admission en [Nom de la Formation]",
        salutation: "Madame, Monsieur les Membres du Jury d'Admission,",
        corps: "C'est avec un grand enthousiasme que je vous présente ma candidature pour intégrer la formation [Nom de la formation] au sein de votre établissement pour la rentrée prochaine.\n\nPassionné(e) par ce domaine d'étude, j'ai développé au cours de mon parcours antérieur des compétences solides. Intégrer votre programme constitue pour moi une étape clé dans l'accomplissement de mon projet académique et professionnel.\n\nDéterminé(e) à m'investir pleinement dans les enseignements de votre cursus, j'espère avoir l'opportunité de vous exposer de vive voix ma motivation lors d'un entretien.",
        politesse: "Dans l'attente d'une réponse favorable, je vous prie d'agréer mes salutations les plus distinguées."
    },
    reclamation: {
        category: 'académique',
        layout: 'formal',
        objet: "Demande de recours gracieux / Réclamation concernant [Sujet]",
        salutation: "Monsieur le Président du Jury / Madame la Directrice,",
        corps: "Je me permets de vous solliciter par la présente afin d'attirer votre attention sur une inexactitude constatée concernant [Explication du problème: note de l'épreuve / calcul de moyenne].\n\nEn effet, après consultation de mes résultats publiés le [Date], il apparaît que [Détail explicatif clair du litige].\n\nSoucieux(se) de régulariser cette situation, je sollicite un réexamen bienveillant de mon dossier à la lumière des éléments explicatifs et des pièces justificatives ci-jointes.",
        politesse: "Comptant sur votre attention et votre équité, je vous prie d'agréer l'expression de mes sentiments respectueux."
    },
    derogation: {
        category: 'académique',
        layout: 'formal',
        objet: "Demande de dérogation pour réinscription exceptionnelle",
        salutation: "Monsieur le Doyen / Madame la Présidente de l'Université,",
        corps: "Par la présente, je sollicite l'octroi d'une dérogation exceptionnelle afin d'être autorisé(e) à me réinscrire en [Nom du Diplôme/Année] pour l'année académique à venir.\n\nAu cours de l'année précédente, mon parcours a été perturbé par des circonstances particulières [Expliquer brièvement : raisons de santé, situation personnelle]. Ces contraintes ne m'ont pas permis de donner la pleine mesure de mes capacités.\n\nAujourd'hui pleinement remobilisé(e), je suis prêt(e) à fournir les efforts nécessaires pour réussir cette année d'étude et valider l'ensemble de mes modules.",
        politesse: "En espérant une suite favorable à ma requête, je vous prie d'agréer l'expression de ma profonde considération."
    },
    bourse: {
        category: 'académique',
        layout: 'formal',
        objet: "Demande d'exonération des frais d'inscription / Aide sociale",
        salutation: "Monsieur le Directeur de la Commission Sociale,",
        corps: "Je me permets d'adresser à votre haute bienveillance une demande d'exonération des droits d'inscription universitaire pour l'année académique en cours.\n\nFaisant face à des difficultés financières importantes qui compromettent la poursuite sereine de mes études, cette aide administrative me permettrait de me consacrer pleinement à mes révisions et à la réussite de mes examens.\n\nVous trouverez en pièces jointes les justificatifs de ma situation financière et de ma scolarité.",
        politesse: "Je vous remercie par avance pour l'attention portée à mon dossier et vous prie d'agréer mes salutations distinguées."
    },

    // CATEGORIE: AMICALE
    invitation: {
        category: 'amicale',
        layout: 'informal',
        objet: "Invitation chaleureuse !",
        salutation: "Chers amies et proches,",
        corps: "C'est avec une grande joie que je vous écris ces quelques lignes pour vous inviter à célébrer un moment très spécial avec moi !\n\nÀ l'occasion de [Événement : mon anniversaire / une fête / une réunion], je serais ravi(e) de vous accueillir le [Date] à partir de [Heure] à [Lieu / Adresse].\n\nAu programme : de la bonne humeur, de délicieux plats et de très beaux souvenirs à partager ensemble. Merci de me confirmer votre présence avant le [Date limite].",
        politesse: "Avec toute mon affection et au plaisir de vous retrouver très vite !"
    },
    nouvelles: {
        category: 'amicale',
        layout: 'informal',
        objet: "Quelques nouvelles depuis [Ville]",
        salutation: "Cher / Chère [Prénom],",
        corps: "J'espère que cette lettre te trouve en pleine forme ainsi que toute ta famille ! Je voulais prendre un petit moment au calme pour te donner de mes nouvelles.\n\nCes derniers temps ont été bien occupés par ici entre [Activités, travail, vacances, voyage]. Le temps passe si vite, mais je repense souvent aux bons moments que nous avons partagés ensemble.\n\nDonne-moi vite de tes nouvelles à ton tour ! Raconte-moi ce que tu deviens et ce que tu prévois pour les mois à venir.",
        politesse: "Je t'embrasse fort et t'envoie toute mon amitié."
    },
    felicitations: {
        category: 'amicale',
        layout: 'informal',
        objet: "Toutes mes félicitations pour ton diplôme / succès !",
        salutation: "Mon cher / Ma chère [Prénom],",
        corps: "Je vient d'apprendre la formidable nouvelle de ta réussite à [Examen / Diplôme / Projet] et je tenais absolument à t'adresser mes félicitations les plus chaleureuses !\n\nJe sais combien tu as travaillé dur pour atteindre cet objectif. Cette réussite est amplement méritée et témoigne de ton talent et de ta persévérance.\n\nCélèbre bien ce beau succès, tu peux être vraiment fier(ère) de toi !",
        politesse: "Bravo encore et à très bientôt pour fêter ça ensemble !"
    },
    remerciements: {
        category: 'amicale',
        layout: 'informal',
        objet: "Un grand merci du fond du cœur",
        salutation: "Chers [Prénoms],",
        corps: "Je voulais vous écrire ce petit mot pour vous exprimer toute ma gratitude pour votre accueil si chaleureux et votre soutien précieux lors de [Événement / séjour].\n\nVotre générosité et votre gentillesse m'ont énormément touché(e). C'est un réel bonheur de pouvoir compter sur des personnes aussi bienveillantes dans ma vie.\n\nJ'espère avoir le plaisir de vous accueillir à mon tour très prochainement à la maison.",
        politesse: "Du fond du cœur, merci encore pour tout. Avec toute mon affection."
    },

    vierge: {
        category: 'libre',
        layout: 'formal',
        objet: "",
        salutation: "",
        corps: "",
        politesse: ""
    }
};

let sigCanvas, sigCtx;
let isDrawing = false;
let sigMode = 'draw';
let inkColor = '#0f172a';

window.addEventListener('DOMContentLoaded', () => {
    initCanvas();
    
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('doc_date').value = today.toLocaleDateString('fr-FR', options);
    
    loadTemplate('piece_admin');
});

function initCanvas() {
    sigCanvas = document.getElementById('sig-canvas');
    if (!sigCanvas) return;
    sigCtx = sigCanvas.getContext('2d');
    resetCanvasContext();

    sigCanvas.addEventListener('mousedown', startDrawing);
    sigCanvas.addEventListener('mousemove', draw);
    sigCanvas.addEventListener('mouseup', stopDrawing);
    sigCanvas.addEventListener('mouseleave', stopDrawing);

    sigCanvas.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        const rect = sigCanvas.getBoundingClientRect();
        startDrawing({ clientX: touch.clientX, clientY: touch.clientY, rect });
        e.preventDefault();
    });
    sigCanvas.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        const rect = sigCanvas.getBoundingClientRect();
        draw({ clientX: touch.clientX, clientY: touch.clientY, rect });
        e.preventDefault();
    });
    sigCanvas.addEventListener('touchend', stopDrawing);
}

function resetCanvasContext() {
    if (!sigCtx) return;
    sigCtx.strokeStyle = inkColor;
    sigCtx.lineWidth = 2.5;
    sigCtx.lineCap = 'round';
    sigCtx.lineJoin = 'round';
}

function setInkColor(color) {
    inkColor = color;
    resetCanvasContext();
    showToast('Couleur d\'encre modifiée', 'fa-paintbrush');
}

function startDrawing(e) {
    isDrawing = true;
    const rect = e.rect || sigCanvas.getBoundingClientRect();
    sigCtx.beginPath();
    sigCtx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

function draw(e) {
    if (!isDrawing) return;
    const rect = e.rect || sigCanvas.getBoundingClientRect();
    sigCtx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    sigCtx.stroke();
    updateSignaturePreview();
}

function stopDrawing() {
    if (isDrawing) {
        isDrawing = false;
        sigCtx.closePath();
        updateSignaturePreview();
    }
}

function clearCanvas() {
    sigCtx.clearRect(0, 0, sigCanvas.width, sigCanvas.height);
    updateSignaturePreview();
}

function setSigMode(mode) {
    sigMode = mode;
    document.getElementById('sig-opt-draw').classList.toggle('hidden', mode !== 'draw');
    document.getElementById('sig-opt-text').classList.toggle('hidden', mode !== 'text');
    document.getElementById('sig-opt-upload').classList.toggle('hidden', mode !== 'upload');

    ['draw', 'text', 'upload'].forEach(m => {
        const btn = document.getElementById(`btn-sig-${m}`);
        if (m === mode) {
            btn.className = "flex-1 py-1.5 rounded-lg bg-white shadow-sm text-indigo-600 font-semibold transition-all";
        } else {
            btn.className = "flex-1 py-1.5 rounded-lg text-slate-600 transition-all hover:text-slate-900";
        }
    });

    updateSignaturePreview();
}

function updateSignatureText() {
    updateSignaturePreview();
}

function handleSigUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            window.uploadedSigUrl = e.target.result;
            updateSignaturePreview();
        };
        reader.readAsDataURL(file);
    }
}

function changeSignatureSize(val) {
    document.getElementById('val-sig-size').textContent = val + 'px';
    const box = document.getElementById('sig-box-container');
    box.style.height = val + 'px';
    checkOverflowStatus();
}

function updateSignaturePreview() {
    const imgEl = document.getElementById('prev_sig_img');
    const textEl = document.getElementById('prev_sig_text');
    const placeholderEl = document.getElementById('prev_sig_placeholder');

    imgEl.classList.add('hidden');
    textEl.classList.add('hidden');
    placeholderEl.classList.add('hidden');

    if (sigMode === 'draw') {
        const pixelBuffer = new Uint32Array(sigCtx.getImageData(0, 0, sigCanvas.width, sigCanvas.height).data.buffer);
        const hasContent = pixelBuffer.some(color => color !== 0);

        if (hasContent) {
            imgEl.src = sigCanvas.toDataURL();
            imgEl.classList.remove('hidden');
        } else {
            placeholderEl.classList.remove('hidden');
        }
    } else if (sigMode === 'text') {
        const textVal = document.getElementById('sig_text_input').value.trim();
        const fontClass = document.getElementById('sig_font_select').value;
        if (textVal) {
            textEl.textContent = textVal;
            textEl.className = `text-xl text-slate-900 ${fontClass}`;
            textEl.classList.remove('hidden');
        } else {
            placeholderEl.classList.remove('hidden');
        }
    } else if (sigMode === 'upload') {
        if (window.uploadedSigUrl) {
            imgEl.src = window.uploadedSigUrl;
            imgEl.classList.remove('hidden');
        } else {
            placeholderEl.classList.remove('hidden');
        }
    }
    checkOverflowStatus();
}

// Synchronisation Formulaire -> Rendu A4
function updatePreview() {
    const expNom = document.getElementById('exp_nom').value || 'Jean DUPONT';
    
    document.getElementById('prev_exp_nom').textContent = expNom;
    document.getElementById('prev_exp_nom_sig').textContent = expNom;
    document.getElementById('prev_exp_nom_inf').textContent = expNom.split(' ')[0] || expNom;
    
    document.getElementById('prev_exp_statut').textContent = document.getElementById('exp_statut').value || 'N° Dossier : 1890575';
    document.getElementById('prev_exp_sub_inf').textContent = document.getElementById('exp_statut').value || 'Ami(e)';
    
    document.getElementById('prev_exp_adresse').textContent = document.getElementById('exp_adresse').value || '12 Rue de la République, 75001 Paris';
    document.getElementById('prev_exp_tel').textContent = 'Tél : ' + (document.getElementById('exp_tel').value || '06 12 34 56 78');
    document.getElementById('prev_exp_email').textContent = 'Email : ' + (document.getElementById('exp_email').value || 'jean.dupont@email.com');

    document.getElementById('prev_dest_titre').textContent = document.getElementById('dest_titre').value || 'À l\'attention du Destinataire';
    document.getElementById('prev_dest_etablissement').textContent = document.getElementById('dest_etablissement').value || '';
    document.getElementById('prev_dest_adresse').textContent = document.getElementById('dest_adresse').value || '';

    const lieu = document.getElementById('doc_lieu').value || 'Paris';
    const date = document.getElementById('doc_date').value || '20 Septembre 2026';
    
    document.getElementById('prev_doc_lieu').textContent = lieu;
    document.getElementById('prev_doc_date').textContent = date;
    document.getElementById('prev_doc_lieu_inf').textContent = lieu;
    document.getElementById('prev_doc_date_inf').textContent = date;

    document.getElementById('prev_doc_objet').textContent = document.getElementById('doc_objet').value || 'Sans objet';
    document.getElementById('prev_doc_salutation').textContent = document.getElementById('doc_salutation').value || 'Madame, Monsieur,';
    document.getElementById('prev_doc_politesse').textContent = document.getElementById('doc_politesse').value || '';

    const corpsText = document.getElementById('doc_corps').value;
    const prevCorpsContainer = document.getElementById('prev_doc_corps');
    prevCorpsContainer.innerHTML = '';
    
    if (corpsText.trim() === '') {
        prevCorpsContainer.innerHTML = '<p class="text-slate-300 italic">[ Le corps de votre lettre s\'affichera ici... ]</p>';
    } else {
        const paragraphs = corpsText.split('\n\n');
        paragraphs.forEach(para => {
            if (para.trim()) {
                const p = document.createElement('p');
                p.textContent = para;
                p.className = 'indent-5';
                prevCorpsContainer.appendChild(p);
            }
        });
    }

    checkOverflowStatus();
}

// Application manuelle des ajustements
function applyCustomFitting() {
    const fontSize = document.getElementById('slider_font_size').value;
    const lineHeight = document.getElementById('slider_line_height').value;
    const margin = document.getElementById('slider_margin').value;

    document.getElementById('val-font-size').textContent = fontSize + 'px';
    document.getElementById('val-line-height').textContent = lineHeight;
    document.getElementById('val-margin').textContent = margin + 'mm';

    const paper = document.getElementById('letter-paper');
    paper.style.fontSize = fontSize + 'px';
    paper.style.lineHeight = lineHeight;
    paper.style.padding = `${margin}mm ${parseInt(margin)+2}mm ${margin}mm ${parseInt(margin)+4}mm`;

    checkOverflowStatus();
}

// Algorithme d'Ajustement Automatique STRICT sur 1 Page A4
function autoFitOnePage() {
    const paper = document.getElementById('letter-paper');
    
    let fontSize = 15;
    let lineHeight = 1.45;
    let margin = 18;

    paper.style.fontSize = fontSize + 'px';
    paper.style.lineHeight = lineHeight;
    paper.style.padding = `${margin}mm ${margin+2}mm ${margin}mm ${margin+4}mm`;

    let iterations = 0;
    while (paper.scrollHeight > paper.clientHeight && iterations < 25) {
        if (fontSize > 10.5) {
            fontSize -= 0.5;
        } else if (lineHeight > 1.15) {
            lineHeight -= 0.05;
        } else if (margin > 10) {
            margin -= 1;
        } else {
            break;
        }

        paper.style.fontSize = fontSize + 'px';
        paper.style.lineHeight = lineHeight;
        paper.style.padding = `${margin}mm ${margin+2}mm ${margin}mm ${margin+4}mm`;
        iterations++;
    }

    document.getElementById('slider_font_size').value = fontSize;
    document.getElementById('slider_line_height').value = lineHeight;
    document.getElementById('slider_margin').value = margin;

    document.getElementById('val-font-size').textContent = fontSize + 'px';
    document.getElementById('val-line-height').textContent = lineHeight.toFixed(2);
    document.getElementById('val-margin').textContent = margin + 'mm';

    checkOverflowStatus();
    showToast('Lettre ajustée parfaitement sur 1 page A4 !', 'fa-wand-magic-sparkles');
}

// Vérification de la jauge de remplissage A4
function checkOverflowStatus() {
    const paper = document.getElementById('letter-paper');
    const badge = document.getElementById('page-status-badge');
    const text = document.getElementById('page-status-text');
    if (!paper || !badge || !text) return;

    const isOverflowing = paper.scrollHeight > paper.clientHeight + 2;
    const fillRatio = Math.min(100, Math.round((paper.scrollHeight / paper.clientHeight) * 100));

    if (isOverflowing) {
        badge.className = "flex items-center space-x-2 text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 px-3 py-1 rounded-lg animate-pulse";
        text.innerHTML = `<i class="fa-solid fa-triangle-exclamation text-rose-500"></i> Attention : Débordement sur la 2e page (${fillRatio}%) ! Cliquez sur "Ajuster auto".`;
    } else {
        badge.className = "flex items-center space-x-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-lg";
        text.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-500"></i> Format 1 Page A4 OK (Remplissage : ${fillRatio}%)`;
    }
}

function loadTemplate(key) {
    const data = templates[key];
    if (!data) return;

    setLayoutMode(data.layout);
    document.getElementById('doc_layout_mode').value = data.layout;

    const badge = document.getElementById('badge-category');
    if (data.category === 'administratif') {
        badge.textContent = 'Administratif';
        badge.className = 'text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full font-semibold';
    } else if (data.category === 'amicale') {
        badge.textContent = 'Amicale / Familiale';
        badge.className = 'text-[10px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full font-semibold';
    } else if (data.category === 'académique') {
        badge.textContent = 'Académique';
        badge.className = 'text-[10px] bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full font-semibold';
    } else {
        badge.textContent = 'Libre';
        badge.className = 'text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full font-semibold';
    }

    document.getElementById('doc_objet').value = data.objet;
    document.getElementById('doc_salutation').value = data.salutation;
    document.getElementById('doc_corps').value = data.corps;
    document.getElementById('doc_politesse').value = data.politesse;

    document.getElementById('toggle_objet').checked = !(data.category === 'amicale' && !data.objet);
    toggleObjetDisplay();

    updatePreview();
    autoFitOnePage();
}

function setLayoutMode(mode) {
    const formalHeader = document.getElementById('prev-formal-header');
    const formalDate = document.getElementById('prev-formal-date');
    const informalHeader = document.getElementById('prev-informal-header');
    const sectionDestinataireWrapper = document.getElementById('section-destinataire-wrapper');

    if (mode === 'informal') {
        formalHeader.classList.add('hidden');
        formalDate.classList.add('hidden');
        informalHeader.classList.remove('hidden');
        sectionDestinataireWrapper.classList.add('opacity-50');
    } else {
        formalHeader.classList.remove('hidden');
        formalDate.classList.remove('hidden');
        informalHeader.classList.add('hidden');
        sectionDestinataireWrapper.classList.remove('opacity-50');
    }
    checkOverflowStatus();
}

function toggleObjetDisplay() {
    const isChecked = document.getElementById('toggle_objet').checked;
    document.getElementById('prev-objet-container').classList.toggle('hidden', !isChecked);
    checkOverflowStatus();
}

function changeDocumentFont(fontClass) {
    const paper = document.getElementById('letter-paper');
    paper.classList.remove('font-body-garamond', 'font-body-merriweather', 'font-body-lora', 'font-body-sans', 'font-body-caveat');
    paper.classList.add(fontClass);
    checkOverflowStatus();
}

function toggleSection(id) {
    const el = document.getElementById(id);
    const icon = document.getElementById(`icon-${id}`);
    el.classList.toggle('hidden');
    if (icon) icon.classList.toggle('rotate-180');
}

function switchMobileTab(tab) {
    const editor = document.getElementById('panel-editor');
    const preview = document.getElementById('panel-preview');
    const btnEdit = document.getElementById('tab-btn-edit');
    const btnPreview = document.getElementById('tab-btn-preview');

    if (tab === 'edit') {
        editor.classList.remove('hidden');
        preview.classList.add('hidden');
        btnEdit.className = "flex-1 py-3 text-center font-medium text-sm border-b-2 border-indigo-600 text-indigo-600 flex justify-center items-center gap-2";
        btnPreview.className = "flex-1 py-3 text-center font-medium text-sm border-b-2 border-transparent text-slate-500 flex justify-center items-center gap-2";
    } else {
        editor.classList.add('hidden');
        preview.classList.remove('hidden', 'lg:block');
        btnPreview.className = "flex-1 py-3 text-center font-medium text-sm border-b-2 border-indigo-600 text-indigo-600 flex justify-center items-center gap-2";
        btnEdit.className = "flex-1 py-3 text-center font-medium text-sm border-b-2 border-transparent text-slate-500 flex justify-center items-center gap-2";
    }
}

function resetFormModal() {
    document.querySelectorAll('input[type="text"], input[type="email"], textarea').forEach(i => i.value = '');
    clearCanvas();
    loadTemplate('piece_admin');
}

function showToast(msg, icon = 'fa-circle-check') {
    const toast = document.getElementById('toast-notification');
    const toastMsg = document.getElementById('toast-message');
    const toastIcon = document.getElementById('toast-icon');

    toastMsg.textContent = msg;
    toastIcon.className = `fa-solid ${icon} text-emerald-400 text-lg`;

    toast.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 2500);
}

// EXPORT PDF & PNG (1 PAGE STRICT)
function downloadPDF() {
    autoFitOnePage();
    
    const element = document.getElementById('letter-paper');
    showToast('Génération du PDF (1 Page strict)...', 'fa-spinner fa-spin');

    const opt = {
        margin:       0,
        filename:     'lettre_administrative_1_page.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, logging: false },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
    };

    html2pdf().set(opt).from(element).save().then(() => {
        showToast('PDF téléchargé avec succès sur 1 page !', 'fa-circle-check');
    }).catch(err => {
        console.error(err);
        showToast('Erreur lors du téléchargement PDF', 'fa-circle-xmark');
    });
}

function downloadPNG() {
    autoFitOnePage();
    
    const element = document.getElementById('letter-paper');
    showToast('Exportation de l\'image PNG...', 'fa-spinner fa-spin');

    html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff'
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'lettre_1_page.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        showToast('Image PNG téléchargée !', 'fa-file-image');
    }).catch(err => {
        console.error(err);
        showToast('Erreur lors de l\'exportation PNG', 'fa-circle-xmark');
    });
}
