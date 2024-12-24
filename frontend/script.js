
 function getdetail() {
    const newcontent = `
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get User Input</title>
</head>
<body>
    <h1>User Input Example</h1>

    <!-- Input Fields -->
    <label for="username">Enter your name:</label>
    <input type="text" id="username" placeholder="Type your name here">
    <br><br>
    <label for="userage">Enter your age:</label>
    <input type="number" id="userage" placeholder="Type your age here">
    <br><br>

    <!-- Button to Submit -->
    <button onclick="sendrequest()">Submit</button>

   
</body>
    `;
    
    // Update the HTML content of the element
    document.getElementById("amenities").innerHTML = newcontent;
 }
    
  async function sendrequest(){
    
    const inputElement = document.getElementById("username").value;
    const inputname = document.getElementById("userage").value;
    const res = await axios.get(`http://localhost:3002/sum?a=${inputElement}&b=${inputname}`);



  }
