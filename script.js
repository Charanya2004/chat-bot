// Function to initialize the chat with a greeting message
function initChat() {
    const chatBox = document.getElementById('chat-box');
    
    // Create and display the greeting message
    const greetingMessage = document.createElement('div');
    greetingMessage.innerHTML = `<strong>Bot:</strong> Hello! I'm your medical assistant. How can I assist you today?`;
    chatBox.appendChild(greetingMessage);
    
    // Auto-scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to get response from the chatbot
function getResponse() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return;

    const chatBox = document.getElementById('chat-box');

    // Display user message
    const userMessage = document.createElement('div');
    userMessage.innerHTML = `<strong>You:</strong> ${userInput}`;
    chatBox.appendChild(userMessage);

    // Auto-scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear the input field
    document.getElementById('user-input').value = '';

    // Simple chatbot logic for suggesting medicines and general advice
    let botResponse = '';

    // Responding with medicine suggestions and general advice for specific symptoms
    if (userInput.toLowerCase().includes('headache')) {
        botResponse = 'For a headache, you can take Paracetamol (500 mg) or Ibuprofen (400 mg). Rest in a dark, quiet room and stay hydrated.';
    } else if (userInput.toLowerCase().includes('fever')) {
        botResponse = 'For fever, consider Paracetamol (500 mg) every 6-8 hours or Ibuprofen (400 mg). Drink plenty of fluids and rest. If fever persists beyond 3 days, consult a doctor.';
    } else if (userInput.toLowerCase().includes('cough')) {
        botResponse = 'For a cough, you can use Dextromethorphan syrup (Robitussin) or Guaifenesin syrup (Mucinex). Drink warm fluids like tea with honey to soothe your throat.';
    } else if (userInput.toLowerCase().includes('nauseous') || userInput.toLowerCase().includes('nausea')) {
        botResponse = 'For nausea, try Meclizine (25 mg) or **Dimenhydrinate (Dramamine, 50 mg). Sip on ginger tea or lie down with your head slightly elevated.';
    } else if (userInput.toLowerCase().includes('stomach pain') || userInput.toLowerCase().includes('abdominal pain')) {
        botResponse = 'For stomach pain, you can take Simethicone (Gas-X) for gas relief or Ranitidine (150 mg) if you suspect acid reflux. Rest in a comfortable position and avoid heavy meals.';
    } else if (userInput.toLowerCase().includes('allergy') || userInput.toLowerCase().includes('allergic reaction')) {
        botResponse = 'For mild allergic reactions, consider Diphenhydramine (Benadryl, 25 mg)** or Loratadine (Claritin, 10 mg). Avoid further exposure to allergens and take a cool shower to soothe itching.';
    } else if (userInput.toLowerCase().includes('diarrhea')) {
        botResponse = 'For diarrhea, Loperamide (Imodium, 2 mg) can help control symptoms. Stay hydrated with electrolyte solutions and avoid solid foods until symptoms improve.';
    } else if (userInput.toLowerCase().includes('cold')) {
        botResponse = 'For cold symptoms, try Phenylephrine (Sudafed) or Acetaminophen (Tylenol). Rest well, use a humidifier, and drink warm fluids to ease congestion.';
    } else if (userInput.toLowerCase().includes('burn')) {
        botResponse = 'For minor burns, apply Silver sulfadiazine cream or Aloe vera gel. Cool the burn under running water for 10 minutes before applying any creams.';
    } else if (userInput.toLowerCase().includes('muscle pain') || userInput.toLowerCase().includes('sore muscles')) {
        botResponse = 'For muscle pain, you can take Ibuprofen (400 mg) or apply Diclofenac gel on the affected area. Rest the muscle and use a warm compress to relax the soreness.';
    } else if (userInput.toLowerCase().includes('toothache')) {
        botResponse = 'For a toothache, try Ibuprofen (400 mg) or Acetaminophen (500 mg). Rinse your mouth with warm salt water and avoid chewing on the affected side.';
    } else if (userInput.toLowerCase().includes('indigestion') || userInput.toLowerCase().includes('heartburn')) {
        botResponse = 'For indigestion or heartburn, take Omeprazole (20 mg) or Tums (calcium carbonate). Avoid lying down immediately after eating and wear loose-fitting clothes.';
    } else if (userInput.toLowerCase().includes('dizziness')) {
        botResponse = 'For dizziness, consider Meclizine (25 mg) if it’s related to motion sickness. Sit or lie down until the feeling passes and avoid sudden movements.';
    } else if (userInput.toLowerCase().includes('sore throat')) {
        botResponse = 'For a sore throat, try Throat lozenges or Acetaminophen (500 mg) for pain relief. Gargle with warm salt water and drink warm liquids.';
    } else {
        botResponse = "I'm not sure about that specific symptom. Please consult a healthcare provider for more accurate medical advice.";
    }

    // Display chatbot response
    const botMessage = document.createElement('div');
    botMessage.innerHTML = `<strong>Bot:</strong> ${botResponse}`;
    chatBox.appendChild(botMessage);

    // Auto-scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Initialize the chat when the page loads
window.onload = initChat;
