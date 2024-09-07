// Define the number of rows and seats per row
const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

// Function to generate seat row HTML
function generateRow(rowLetter) {
    return `
        <div class="flex items-center mt-4 mb-5 row-container">
            <!-- Row Label -->
            <div class="text-lg font-semibold text-[#03071250] mr-4 md:mr-6">${rowLetter}</div>
            <!-- Left Side Seats -->
            <div class="flex gap-4 md:gap-10 mr-8 left-row">
                <button onclick="buttonColor(event)" id="${rowLetter}1" class="btn px-4 md:px-10 py-2 text-lg font-semibold text-[#03071250] all-seats">${rowLetter}1</button>
                <button onclick="buttonColor(event)" id="${rowLetter}2" class="btn px-4 md:px-10 py-2 text-lg font-semibold text-[#03071250] all-seats">${rowLetter}2</button>
            </div>
            <!-- Spacer -->
            <div class="flex-1"></div>
            <!-- Right Side Seats -->
            <div class="flex gap-4 md:gap-10 right-row">
                <button onclick="buttonColor(event)" id="${rowLetter}3" class="btn px-4 md:px-10 py-2 text-lg font-semibold text-[#03071250] all-seats">${rowLetter}3</button>
                <button onclick="buttonColor(event)" id="${rowLetter}4" class="btn px-4 md:px-10 py-2 text-lg font-semibold text-[#03071250] all-seats">${rowLetter}4</button>
            </div>
        </div>
    `;
}

// Function to generate all rows
function generateSeating() {
    let seatingHtml = '';

    // Loop through each row and generate its HTML
    rows.forEach(row => {
        seatingHtml += generateRow(row);
    });

    // Insert the generated HTML into the container
    document.getElementById('seating-container').innerHTML = seatingHtml;
}

// Call the function to generate the seating chart on page load
generateSeating();
