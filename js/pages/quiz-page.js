(function () {
  'use strict';
  window.PharmHub = window.PharmHub || {};
  PharmHub.pages = PharmHub.pages || {};

  PharmHub.pages.quizPage = {
    render(container, params) {
      if (params) {
        // Run specific topic quiz
      }

      let html = `
        <div class="pharma-container pharma-section" style="max-width: 800px; margin: 0 auto;">
          <div style="text-align:center; margin-bottom: 2rem;">
            <h1>Pharmaceutics Quiz</h1>
            <p style="color:var(--text-secondary);">Test your knowledge across various topics.</p>
          </div>

          <div id="quiz-setup" class="pharma-card" style="padding: 2rem; text-align:center;">
            <i data-lucide="brain-circuit" style="width:64px; height:64px; color:var(--primary); margin-bottom:1rem;"></i>
            <h2 style="margin-bottom:1rem;">Ready to test your knowledge?</h2>
            <div style="display:flex; justify-content:center; gap: 1rem;">
              <button id="btn-quick-quiz" class="pharma-btn pharma-btn--primary">Quick 5 Questions</button>
            </div>
          </div>

          <div id="quiz-active" style="display:none;">
            <div style="display:flex; justify-content:space-between; margin-bottom:1rem; color:var(--text-secondary); font-weight:bold;">
              <span id="quiz-progress-text">Question 1 / 5</span>
              <span>Score: <span id="quiz-score-val">0</span></span>
            </div>
            <div class="pharma-progress-bar" style="margin-bottom:2rem; height:8px; background:var(--bg-secondary); border-radius:var(--radius-full); overflow:hidden;">
              <div id="quiz-progress-fill" style="width:20%; height:100%; background:var(--primary);"></div>
            </div>

            <div class="pharma-card">
              <div class="pharma-card__body" style="padding:2rem;">
                <h2 id="q-text" style="margin-top:0; margin-bottom:2rem;">Question text goes here?</h2>
                <div id="q-options" style="display:flex; flex-direction:column; gap:1rem;">
                  <!-- Options generated dynamically -->
                </div>
                <div id="q-feedback" class="pharma-quiz__feedback" style="display:none; margin-top:2rem; padding:1rem; border-radius:var(--radius-md);"></div>
                <div style="text-align:right; margin-top:2rem;">
                  <button id="btn-next-q" class="pharma-btn pharma-btn--primary" style="display:none;">Next Question</button>
                </div>
              </div>
            </div>
          </div>

          <div id="quiz-results" class="pharma-card" style="display:none; text-align:center; padding:3rem 2rem;">
            <i data-lucide="award" style="width:64px; height:64px; color:var(--success); margin-bottom:1rem;"></i>
            <h2>Quiz Completed!</h2>
            <p style="font-size:1.2rem; margin-bottom:2rem;">You scored <strong id="final-score" style="font-size:1.5rem; color:var(--primary);"></strong></p>
            <button id="btn-restart" class="pharma-btn pharma-btn--primary">Try Again</button>
          </div>
        </div>
      `;
      container.innerHTML = html;

      // Logic
      let currentQuestions = [];
      let currentIndex = 0;
      let score = 0;

      container.querySelector('#btn-quick-quiz').addEventListener('click', () => {
        // mock fetching questions
        if (PharmHub.quiz && typeof PharmHub.quiz.getQuestions === 'function') {
          currentQuestions = PharmHub.quiz.getQuestions(null, 5);
        } else {
          currentQuestions = [
            { question: "Which equation describes the rate of drug dissolution?", options: ["Noyes-Whitney", "Henderson-Hasselbalch", "Arrhenius", "Stokes' law"], correct: 0, explanation: "The Noyes-Whitney equation governs the dissolution rate of solids." },
            { question: "A substance that reduces surface tension is called a:", options: ["Binder", "Surfactant", "Glidant", "Disintegrant"], correct: 1, explanation: "Surfactants (surface active agents) lower the surface tension between two liquids or a liquid and a solid." },
            { question: "Which is a water-soluble base for suppositories?", options: ["Cocoa butter", "Witepsol", "PEG (Polyethylene glycol)", "Massa Estarinum"], correct: 2, explanation: "PEG is a common hydrophilic (water-soluble) suppository base." }
          ];
        }
        
        currentIndex = 0;
        score = 0;
        
        container.querySelector('#quiz-setup').style.display = 'none';
        container.querySelector('#quiz-results').style.display = 'none';
        container.querySelector('#quiz-active').style.display = 'block';
        
        renderQuestion();
      });

      function renderQuestion() {
        if (currentIndex >= currentQuestions.length) {
          showResults();
          return;
        }

        const q = currentQuestions[currentIndex];
        container.querySelector('#quiz-progress-text').innerText = `Question ${currentIndex + 1} / ${currentQuestions.length}`;
        container.querySelector('#quiz-progress-fill').style.width = `${((currentIndex) / currentQuestions.length) * 100}%`;
        container.querySelector('#quiz-score-val').innerText = score;
        
        container.querySelector('#q-text').innerText = q.question;
        const optsContainer = container.querySelector('#q-options');
        
        // Remove existing animation class to reset
        optsContainer.parentElement.classList.remove('pharma-quiz__question-container');
        // Force reflow
        void optsContainer.parentElement.offsetWidth;
        optsContainer.parentElement.classList.add('pharma-quiz__question-container');

        optsContainer.innerHTML = q.options.map((opt, i) => `
          <button class="pharma-btn pharma-btn--outline pharma-quiz__option quiz-opt" style="text-align:left; padding:1rem; font-size:1rem; height:auto; justify-content:flex-start;" data-idx="${i}">${opt}</button>
        `).join('');

        container.querySelector('#q-feedback').style.display = 'none';
        container.querySelector('#btn-next-q').style.display = 'none';

        container.querySelectorAll('.quiz-opt').forEach(btn => {
          btn.addEventListener('click', (e) => {
            if (container.querySelector('#btn-next-q').style.display !== 'none') return; // already answered
            
            const selected = parseInt(e.target.getAttribute('data-idx'));
            const isCorrect = selected === q.correct;
            
            if (isCorrect) score++;
            
            container.querySelectorAll('.quiz-opt').forEach(b => {
              const idx = parseInt(b.getAttribute('data-idx'));
              if (idx === q.correct) {
                b.classList.add('correct');
              } else if (idx === selected && !isCorrect) {
                b.classList.add('incorrect');
              }
              b.style.opacity = (idx === q.correct || idx === selected) ? '1' : '0.5';
            });

            const fb = container.querySelector('#q-feedback');
            fb.style.display = 'block';
            fb.style.background = isCorrect ? 'rgba(16,185,129,0.1)' : 'rgba(239,68,68,0.1)';
            fb.style.borderLeft = `4px solid ${isCorrect ? 'var(--success)' : 'var(--danger)'}`;
            fb.innerHTML = `<strong style="color:${isCorrect?'var(--success)':'var(--danger)'}">${isCorrect ? 'Correct!' : 'Incorrect.'}</strong> ${q.explanation}`;

            container.querySelector('#btn-next-q').style.display = 'inline-flex';
          });
        });
      }

      container.querySelector('#btn-next-q').addEventListener('click', () => {
        currentIndex++;
        renderQuestion();
      });

      function showResults() {
        container.querySelector('#quiz-active').style.display = 'none';
        container.querySelector('#quiz-results').style.display = 'block';
        container.querySelector('#final-score').innerText = `${score} out of ${currentQuestions.length}`;
        
        // Confetti Animation
        launchConfetti();
      }

      function launchConfetti() {
        let canvas = document.getElementById('confetti-canvas');
        if (!canvas) {
          canvas = document.createElement('canvas');
          canvas.id = 'confetti-canvas';
          document.body.appendChild(canvas);
        }
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const ctx = canvas.getContext('2d');
        const particles = [];
        const colors = ['#0D9488', '#F59E0B', '#10B981', '#3B82F6', '#EF4444'];
        
        for (let i = 0; i < 150; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            w: Math.random() * 10 + 5,
            h: Math.random() * 10 + 5,
            c: colors[Math.floor(Math.random() * colors.length)],
            vy: Math.random() * 3 + 2,
            vx: Math.random() * 4 - 2,
            rot: Math.random() * 360,
            rotS: Math.random() * 10 - 5
          });
        }
        
        function animate() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          let allFell = true;
          particles.forEach(p => {
            p.y += p.vy;
            p.x += p.vx;
            p.rot += p.rotS;
            if (p.y < canvas.height) allFell = false;
            
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot * Math.PI / 180);
            ctx.fillStyle = p.c;
            ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
            ctx.restore();
          });
          if (!allFell) {
            requestAnimationFrame(animate);
          } else {
            canvas.remove();
          }
        }
        animate();
      }

      container.querySelector('#btn-restart').addEventListener('click', () => {
        container.querySelector('#quiz-results').style.display = 'none';
        container.querySelector('#quiz-setup').style.display = 'block';
        const canvas = document.getElementById('confetti-canvas');
        if (canvas) canvas.remove();
      });
    }
  };
})();
