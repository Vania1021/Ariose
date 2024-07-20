// import React from 'react';
// import './transaction.css';

// function TransferForm() {
//   return (
//     <div>
//       <h1 id="typewriter"></h1>
//       <form id="transfer-form">
//         <label htmlFor="amount">Amount: *</label>
//         <input type="number" id="amount" name="amount" required /><br /><br />
//         <label htmlFor="recipient">Recipient: *</label>
//         <input type="text" id="recipient" name="recipient" required /><br /><br />
//         <label htmlFor="recipientID">Recipient ID: *</label>
//         <input type="text" id="recipientID" name="recipientID" required /><br /><br />
//         <label htmlFor="customerTransactionID">Customer Transaction ID: *</label>
//         <input type="text" id="customerTransactionID" name="customerTransactionID" required /><br /><br />
//         <h6>
//           <input type="checkbox" name="tick" value="I have read the privacy policies and user agreement and hereby agree with the privacy policy and processing of my personal data by ARIOSE Services Private Limited. I hereby authorize and give consent to ARIOSE Services Private Limited to send me, either through itself or through any third-party service provider, from time-to-time various information/promotional material/transactional information/account information, and other information by way of notifications/alerts/SMS/WhatsApp messages and other messages or calls or commercial communication on my registered number, whether the number is registered with National Do Not Call Registry/ listed in National Customer Preference Register or not. I also confirm that by sending any of such messages / calls, I will not hold ARIOSE and its third-party service provider liable / institute complaint under the Telecom Commercial Communications Customer Preference Regulations, 2018 or such other applicable regulations including any amendment thereof, as may be applicable from time to time. If you want to revoke your consent, please send an email to helpdesk@ariose.in or call our support number +91 81426340000. Application of Indians of 18 years and above only with a valid PAN Card is accepted.*" required />
//           I have read the privacy policies and user agreement and hereby agree with the privacy policy and processing of my personal data by ARIOSE Services Private Limited. I hereby authorize and give consent to ARIOSE Services Private Limited to send me, either through itself or through any third-party service provider, from time-to-time various information/promotional material/transactional information/account information, and other information by way of notifications/alerts/SMS/WhatsApp messages and other messages or calls or commercial communication on my registered number, whether the number is registered with National Do Not Call Registry/ listed in National Customer Preference Register or not. I also confirm that by sending any of such messages / calls, I will not hold ARIOSE and its third-party service provider liable / institute complaint under the Telecom Commercial Communications Customer Preference Regulations, 2018 or such other applicable regulations including any amendment thereof, as may be applicable from time to time. If you want to revoke your consent, please send an email to helpdesk@ariose.in or call our support number +91 81426340000. Application of Indians of 18 years and above only with a valid PAN Card is accepted.*
//         </h6>
//         <div className="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div><br /><br />
//         <button type="submit">Transfer</button>
//         <br />
//       </form>
//     </div>
//   );
// }

// export default TransferForm;

import React from 'react';
import './transaction.css';

const DomesticMoneyTransfer = () => {
  return (
    <div>
      <h1 id="typewriter"></h1>
      <form id="transfer-form">
        <label htmlFor="amount">Amount: *</label>
        <input type="number" id="amount" name="amount" required /><br /><br />
        
        <label htmlFor="recipient">Recipient: *</label>
        <input type="text" id="recipient" name="recipient" required /><br /><br />
        
        <label htmlFor="recipientID">Recipient ID: *</label>
        <input type="text" id="recipientID" name="recipientID" required /><br /><br />
        
        <label htmlFor="customerTransactionID">Customer Transaction ID: *</label>
        <input type="text" id="customerTransactionID" name="customerTransactionID" required /><br /><br />
        
        <h6><input type="checkbox" name="tick" value="I have read the privacy policies and user agreement and hereby agree with the privacy policy and processing of my personal data by ARIOSE Services Private Limited. I hereby authorize and give consent to ARIOSE Services Private Limited to send me, either through itself or through any third-party service provider, from time-to-time various information/promotional material/transactional information/account information, and other information by way of notifications/alerts/SMS/WhatsApp messages and other messages or calls or commercial communication on my registered number, whether the number is registered with National Do Not Call Registry/ listed in National Customer Preference Register or not. I also confirm that by sending any of such messages / calls, I will not hold ARIOSE and its third-party service provider liable / institute complaint under the Telecom Commercial Communications Customer Preference Regulations, 2018 or such other applicable regulations including any amendment thereof, as may be applicable from time to time. If you want to revoke your consent, please send an email to helpdesk@ariose.in or call our support number +91 81426340000. Application of Indians of 18 years and above only with a valid PAN Card is accepted.*" required />
          I have read the privacy policies and user agreement and hereby agree with the privacy policy and processing of my personal data by ARIOSE Services Private Limited. I hereby authorize and give consent to ARIOSE Services Private Limited to send me, either through itself or through any third-party service provider, from time-to-time various information/promotional material/transactional information/account information, and other information by way of notifications/alerts/SMS/WhatsApp messages and other messages or calls or commercial communication on my registered number, whether the number is registered with National Do Not Call Registry/ listed in National Customer Preference Register or not. I also confirm that by sending any of such messages / calls, I will not hold ARIOSE and its third-party service provider liable / institute complaint under the Telecom Commercial Communications Customer Preference Regulations, 2018 or such other applicable regulations including any amendment thereof, as may be applicable from time to time. If you want to revoke your consent, please send an email to helpdesk@ariose.in or call our support number +91 81426340000. Application of Indians of 18 years and above only with a valid PAN Card is accepted.*
        </h6>
        
        <div className="g-recaptcha" data-sitekey="YOUR_SITE_KEY"></div><br /><br />
        <button type="submit">Transfer</button>
        <br />
      </form>

      <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    </div>
  );
};

export default DomesticMoneyTransfer;

// Include Google reCAPTCHA in your index.html
// <script src="https://www.google.com/recaptcha/api.js" async defer></script>
// Include transaction.js functionality in your desired place.


// document.addEventListener('DOMContentLoaded', function () {
//     const typewriterText = 'Domestic Money Transfer';
//     let index = 0;
//     const speed = 100; // Speed of typing in milliseconds
  
//     function typeWriter() {
//       if (index < typewriterText.length) {
//         document.getElementById('typewriter').innerHTML += typewriterText.charAt(index);
//         index++;
//         setTimeout(typeWriter, speed);
//       }
//     }
  
//     typeWriter();
//   });
  
//   const form = document.getElementById('transfer-form');

// form.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const amount = document.getElementById('amount').value;
//   const recipient = document.getElementById('recipient').value;
//   const recipient_ID = document.getElementById('recipient ID').value;
//   const customer_transaction_ID = document.getElementById('customer transaction ID').value;

//   try {
//     // Step 1: Call the fraud detection API
//     const fraudResponse = await fetch('https://your-backend-api/fraud-detection', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ amount, recipient, source })
//     });
    
//     const fraudData = await fraudResponse.json();
    
//     // Step 2: Check if the transaction is flagged as fraud
//     if (fraudData.isFraud === 1) {
//       alert('Fraudulent transaction detected! Please check the details.');
//       return; // Exit if fraud is detected
//     }

//     // Step 3: Proceed with the transfer if not fraud
//     const transferResponse = await fetch('/transfer', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ amount, recipient, source })
//     });

//     const transferData = await transferResponse.json();
    
//     if (transferData.message === 'Transfer successful') {
//       alert('Transfer successful!');
//     } else {
//       alert('Error: ' + transferData.error);
//     }
    
//   } catch (err) {
//     console.error(err);
//     alert('Error: Unable to complete transfer');
//   }
// });