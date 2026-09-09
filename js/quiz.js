(function () {
  'use strict';
  window.PharmHub = window.PharmHub || {};

  PharmHub.quiz = {
    sessions: {},

    getRandomQuestion(topic) {
      let questions = PharmHub.data.quizzes || [];
      if (topic) {
        questions = questions.filter(q => q.topic === topic);
      }
      if (questions.length === 0) return null;
      return questions[Math.floor(Math.random() * questions.length)];
    },

    getQuestions(topic, count = 10, difficulty) {
      let questions = PharmHub.data.quizzes || [];
      if (topic) {
        questions = questions.filter(q => q.topic === topic);
      }
      if (difficulty) {
        questions = questions.filter(q => q.difficulty === difficulty);
      }
      
      // Shuffle array
      const shuffled = [...questions].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    },

    checkAnswer(questionId, answerIndex) {
      const questions = PharmHub.data.quizzes || [];
      const question = questions.find(q => q.id === questionId);
      
      if (!question) {
        throw new Error(`Question ${questionId} not found`);
      }

      const isCorrect = question.correct === answerIndex;
      return {
        correct: is: isCorrect,
        explanation: question.explanation
      };
    },

    startSession(topic, count = 10) {
      const questions = this.getQuestions(topic, count);
      const sessionId = 'session_' + Math.random().toString(36).substr(2, 9);
      
      this.sessions[sessionId] = {
        topic: topic,
        questions: questions,
        answers: {},
        startTime: Date.now()
      };
      
      return sessionId;
    },

    submitAnswer(sessionId, questionId, answerIndex) {
      if (!this.sessions[sessionId]) {
        throw new Error(`Session ${sessionId} not found`);
      }
      
      const session = this.sessions[sessionId];
      const result = this.checkAnswer(questionId, answerIndex);
      
      session.answers[questionId] = {
        answerIndex: answerIndex,
        correct: result.correct
      };
      
      return result;
    },

    getSessionScore(sessionId) {
      if (!this.sessions[sessionId]) {
        throw new Error(`Session ${sessionId} not found`);
      }
      
      const session = this.sessions[sessionId];
      let correctCount = 0;
      const results = [];
      
      session.questions.forEach(q => {
        const answer = session.answers[q.id];
        const isCorrect = answer ? answer.correct : false;
        if (isCorrect) correctCount++;
        
        results.push({
          questionId: q.id,
          answered: !!answer,
          correct: isCorrect,
          answerIndex: answer ? answer.answerIndex : null
        });
      });
      
      const total = session.questions.length;
      return {
        correct: correctCount,
        total: total,
        percentage: total > 0 ? (correctCount / total) * 100 : 0,
        results: results
      };
    }
  };
})();
