$(function () {
  /*  ヒント */
  function hintForm() {
    document.addEventListener("DOMContentLoaded", function () {
      const messageForm = document.getElementById("message-form");
      const messageInput = document.getElementById("message-input");
      const messagesContainer = document.getElementById("messages");

      // 初期メッセージを表示
      addBotMessage("こんにちは！らくらくサイトのイメージキャラクター「ラク子」です。何かお手伝いできることはありますか？");

      messageForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const message = messageInput.value.trim();
        if (message !== "") {
          // ユーザーメッセージを表示
          addUserMessage(message);
          messageInput.value = "";

          // ボットの返信を少し遅らせる
          setTimeout(() => {
            respondToMessage(message);
          }, 1000);
        }
      });

      function addUserMessage(text) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", "user-message");
        messageElement.textContent = text;
        messagesContainer.appendChild(messageElement);
        scrollToBottom();
      }

      function addBotMessage(text) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", "bot-message");
        messageElement.textContent = text;
        messagesContainer.appendChild(messageElement);
        scrollToBottom();
      }

      function scrollToBottom() {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
      }

      function respondToMessage(message) {
        // 簡単な応答ロジック
        let response;

        const lowerMessage = message.toLowerCase();

        if (lowerMessage.includes("こんにちは") || lowerMessage.includes("hello")) {
          response = "こんにちは！今日はどうですか？";
        } else if (lowerMessage.includes("ありがとう")) {
          response = "どういたしまして！他に何かお手伝いできることはありますか？";
        } else if (lowerMessage.includes("名前") && lowerMessage.includes("は")) {
          response = "私はラク子です！らくらくサイトのイメージキャラクターです。";
        } else if (lowerMessage.includes("何ができる") || lowerMessage.includes("できること")) {
          response = "らくらくサイトについての質問に答えたり、お話し相手になったりできますよ！";
        } else {
          response = "なるほど、興味深いですね！もっと教えてください。";
        }

        addBotMessage(response);
      }
    });
  }
  hintForm();
});
