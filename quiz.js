/**
 * Quiz Engine — Interaktivni kvizovi za lekcije
 * Podržava: multiple-choice i true-false pitanja
 */
function initQuiz(containerId, questions) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let answered = false;

    // Build quiz HTML
    let html = '<div class="quiz-section">';
    html += '<h3 class="quiz-title">🧠 Proveri svoje znanje!</h3>';

    questions.forEach((q, qi) => {
        html += '<div class="quiz-question" data-correct="' + q.correct + '">';
        html += '<p class="quiz-question-text"><strong>' + (qi + 1) + '.</strong> ' + q.question + '</p>';
        html += '<div class="quiz-options">';

        const opts = q.type === 'true-false' ? ['Tačno', 'Netačno'] : q.options;
        opts.forEach((opt, oi) => {
            html += '<label class="quiz-option">';
            html += '<input type="radio" name="quiz-q' + qi + '" value="' + oi + '">';
            html += '<span class="quiz-option-text">' + opt + '</span>';
            html += '</label>';
        });

        html += '</div></div>';
    });

    html += '<div class="quiz-actions">';
    html += '<button class="quiz-btn quiz-btn-check" onclick="checkQuiz(\'' + containerId + '\')">✅ Proveri odgovore</button>';
    html += '<button class="quiz-btn quiz-btn-retry" style="display:none;" onclick="retryQuiz(\'' + containerId + '\', quizData[\'' + containerId + '\'])">🔄 Pokušaj ponovo</button>';
    html += '</div>';
    html += '<div class="quiz-result" style="display:none;"></div>';
    html += '</div>';

    container.innerHTML = html;

    // Store quiz data for retry
    if (!window.quizData) window.quizData = {};
    window.quizData[containerId] = questions;
}

function checkQuiz(containerId) {
    const container = document.getElementById(containerId);
    const questionEls = container.querySelectorAll('.quiz-question');
    let correct = 0;
    let total = questionEls.length;
    let allAnswered = true;

    questionEls.forEach((qEl) => {
        const selected = qEl.querySelector('input[type="radio"]:checked');
        if (!selected) {
            allAnswered = false;
            return;
        }

        const correctIdx = parseInt(qEl.dataset.correct);
        const selectedIdx = parseInt(selected.value);
        const options = qEl.querySelectorAll('.quiz-option');

        // Disable all inputs
        qEl.querySelectorAll('input[type="radio"]').forEach(r => r.disabled = true);

        // Mark correct and incorrect
        options.forEach((opt, i) => {
            if (i === correctIdx) {
                opt.classList.add('correct');
            }
            if (i === selectedIdx && selectedIdx !== correctIdx) {
                opt.classList.add('incorrect');
            }
        });

        if (selectedIdx === correctIdx) correct++;
    });

    if (!allAnswered) {
        // Shake the button briefly
        const btn = container.querySelector('.quiz-btn-check');
        btn.style.animation = 'none';
        btn.offsetHeight; // trigger reflow
        btn.style.animation = 'shake 0.4s ease';
        return;
    }

    // Show result
    const resultEl = container.querySelector('.quiz-result');
    const emoji = correct === total ? '🎉' : correct >= total / 2 ? '👍' : '💪';
    resultEl.innerHTML = emoji + ' Rezultat: <strong>' + correct + '/' + total + '</strong> tačnih odgovora!';
    resultEl.style.display = 'block';

    // Hide check, show retry
    container.querySelector('.quiz-btn-check').style.display = 'none';
    container.querySelector('.quiz-btn-retry').style.display = 'inline-block';
}

function retryQuiz(containerId, questions) {
    initQuiz(containerId, questions);
}
