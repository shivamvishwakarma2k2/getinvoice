<<<<<<< HEAD
// Set default date to today
const today = new Date().toISOString().split('T')[0];
document.getElementById("invoiceDate").value = today;

// Function to format date as dd/mm/yyyy
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());
    return `${day}/${month}/${year}`;
}

// Function to delete a row
function deleteRow(button) {
    button.closest('tr').remove();
    updateRowNumbers();
    updateGrandTotal();
}

// Function to update row numbers after deletion
function updateRowNumbers() {
    const rows = document.querySelectorAll("#invoiceTable tbody tr");
    rows.forEach((row, index) => {
        row.cells[0].textContent = index + 1;
    });
=======
document.getElementById("currentDate").textContent = formatDate(
    new Date()
);

let rowCount = 0;

// Function to format date as dd/mm/yy
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);
    return `${day}/${month}/20${year}`;
>>>>>>> 957435ccf6eeaa75c12c973004d2f3d07068a042
}

// Function to add a new row
function addNewRow() {
<<<<<<< HEAD
    const tbody = document.querySelector("#invoiceTable tbody");
    const rowNumber = tbody.children.length + 1;
    const row = document.createElement("tr");
    row.innerHTML = `
        <td class="text-center">${rowNumber}</td>
=======
    rowCount++;
    const tbody = document.querySelector("#invoiceTable tbody");
    const row = document.createElement("tr");
    row.innerHTML = `
        <td class="text-center">${rowCount}</td>
>>>>>>> 957435ccf6eeaa75c12c973004d2f3d07068a042
        <td><input type="text" class="form-control particulars" required></td>
        <td><input type="number" class="form-control quantity" step="0.01" min="0"></td>
        <td><input type="number" class="form-control rate" step="0.01" min="0"></td>
        <td><input type="number" class="form-control amount"></td>
<<<<<<< HEAD
        <td><button class="btn btn-danger btn-sm" onclick="deleteRow(this)">Delete</button></td>
=======
>>>>>>> 957435ccf6eeaa75c12c973004d2f3d07068a042
    `;
    tbody.appendChild(row);

    const quantityInput = row.querySelector(".quantity");
    const rateInput = row.querySelector(".rate");
    const amountInput = row.querySelector(".amount");

    // Event listeners for quantity/rate inputs
    quantityInput.addEventListener("input", () =>
        handleRowInput(row)
    );
    rateInput.addEventListener("input", () => handleRowInput(row));

    // Event listener for direct amount input (only allowed when qty/rate are empty)
    amountInput.addEventListener("input", () => {
        if (!quantityInput.value && !rateInput.value) {
            updateGrandTotal();
        }
    });
}

// Function to handle row input changes
function handleRowInput(row) {
<<<<<<< HEAD
    let quantity =
        Math.max(0, parseFloat(row.querySelector(".quantity").value) || 0);
    let rate = Math.max(0, parseFloat(row.querySelector(".rate").value) || 0);
=======
    const quantity =
        parseFloat(row.querySelector(".quantity").value) || 0;
    const rate = parseFloat(row.querySelector(".rate").value) || 0;
>>>>>>> 957435ccf6eeaa75c12c973004d2f3d07068a042
    const amountInput = row.querySelector(".amount");

    // If BOTH quantity and rate are empty, allow editing amount
    if (quantity === 0 && rate === 0) {
        amountInput.readOnly = false;
        // amountInput.value = ""; // Clear amount
    } else {
        // Calculate amount if at least one value exists
        const amount = quantity * rate;
        amountInput.value = amount.toFixed(2);
        amountInput.readOnly = true; // Lock amount
    }

    updateGrandTotal();
}

// Function to update the grand total
function updateGrandTotal() {
    const amounts = document.querySelectorAll(".amount");
    let total = 0;
    amounts.forEach((input) => {
<<<<<<< HEAD
        total += Math.max(0, parseFloat(input.value) || 0);
    });

    const deduction =
        Math.max(0, parseFloat(document.getElementById("deduction").value) || 0);
=======
        total += parseFloat(input.value) || 0;
    });

    const deduction =
        parseFloat(document.getElementById("deduction").value) || 0;
>>>>>>> 957435ccf6eeaa75c12c973004d2f3d07068a042
    document.getElementById(
        "grandTotal"
    ).textContent = `₹${total.toFixed(2)}`;
    document.getElementById("netTotal").textContent = `₹${(
        total - deduction
    ).toFixed(2)}`;
}

// Event listener for deduction input
document
    .getElementById("deduction")
    .addEventListener("input", updateGrandTotal);

// Function to generate PDF
<<<<<<< HEAD
async function generatePDF() {
=======
function generatePDF() {
>>>>>>> 957435ccf6eeaa75c12c973004d2f3d07068a042
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont("times");
<<<<<<< HEAD
    doc.setTextColor(0, 0, 0);

    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.text("Mobile: " + config.mobile, 190, 15, { align: "right" });

    doc.setFontSize(26);
    doc.setTextColor(220, 53, 69); // Red color
    doc.text(config.companyName, 105, 25, { align: "center" });
=======
    doc.setTextColor(0, 0, 0); 

    doc.setFontSize(12);
    doc.setFont("times", "bold");
    doc.text("Mobile: 9867924687", 190, 15, { align: "right" });

    doc.setFontSize(26);
    doc.setTextColor(220, 53, 69); // Red color
    doc.text("SHIVAM FURNITURE", 105, 25, { align: "center" });
>>>>>>> 957435ccf6eeaa75c12c973004d2f3d07068a042

    doc.setFontSize(13);
    doc.setTextColor(0, 0, 0); // Dark blue
    doc.text(
<<<<<<< HEAD
        config.specialties,
=======
        "Specialists: Furniture, Aluminum Sliding, Painting, POP, Polish & All kinds of Civil Work",
>>>>>>> 957435ccf6eeaa75c12c973004d2f3d07068a042
        105,
        35,
        { align: "center" }
    );

    // First Horizontal Line (Red)
    doc.setLineWidth(0.3);
    doc.setTextColor(0, 0, 0);
    doc.line(0, 40, 210, 40);

    // Address Line (Dark Blue)
    doc.setFontSize(12);
<<<<<<< HEAD
    doc.text(config.address, 105, 47, {
=======
    doc.text("Shiv Chatrapati Chawl, Surya Nagar, Near Police Station, Vikhroli West, Mumbai-400083", 105, 47, {
>>>>>>> 957435ccf6eeaa75c12c973004d2f3d07068a042
        align: "center"
    });

    // Second Horizontal Line (Red)
    doc.line(0, 52, 210, 52);

    // Date (Right Aligned - Dark Blue)
    doc.setTextColor(0, 0, 0); // Dark blue
<<<<<<< HEAD
    const selectedDate = document.getElementById("invoiceDate").value;
    const dateObj = selectedDate ? new Date(selectedDate) : new Date();
    doc.text(`Date: ${formatDate(dateObj)}`, 190, 60, { align: "right" });
=======
    doc.text(`Date: ${formatDate(new Date())}`, 190, 60, { align: "right" });
>>>>>>> 957435ccf6eeaa75c12c973004d2f3d07068a042

    // Add a bit of space after the date
    doc.text(" ", 105, 50);

    // Table data preparation
    const body = [];
    document
        .querySelectorAll("#invoiceTable tbody tr")
        .forEach((row) => {
            const particulars =
                row.querySelector(".particulars").value;
            const quantity = row.querySelector(".quantity").value;
            const rate = row.querySelector(".rate").value;
            const amount = row.querySelector(".amount").value;

            // If rate and quantity are empty, only show particulars and amount
            if (!quantity && !rate) {
                body.push([
                    row.cells[0].textContent,
                    particulars,
                    "", // Empty quantity
                    "", // Empty rate
                    amount,
                ]);
            } else {
                body.push([
                    row.cells[0].textContent,
                    particulars,
                    quantity,
                    rate,
                    amount,
                ]);
            }
        });

    // Add total, deduction, and net total rows
    body.push(
        [
            {
                content: "Total Amount",
                colSpan: 4,
                styles: { halign: "right", fontStyle: "bold" },
            },
            `${document
                .getElementById("grandTotal")
                .textContent.replace("₹", "")}`,
        ],
        [
            {
                content: "Advance Paid",
                colSpan: 4,
                styles: { halign: "right", fontStyle: "bold" },
            },
<<<<<<< HEAD
            `${(parseFloat(document.getElementById("deduction").value) || 0).toFixed(2)}`,
        ]);

    body.push([
        {
            content: "Final Payable",
            colSpan: 4,
            styles: { halign: "right", fontStyle: "bold" },
        },
        `${document
            .getElementById("netTotal")
            .textContent.replace("₹", "")}`,
    ]
=======
            `${document.getElementById("deduction").value}`,
        ],
        [
            {
                content: "Final Payable",
                colSpan: 4,
                styles: { halign: "right", fontStyle: "bold" },
            },
            `${document
                .getElementById("netTotal")
                .textContent.replace("₹", "")}`,
        ]
>>>>>>> 957435ccf6eeaa75c12c973004d2f3d07068a042
    );

    // Table styling
    doc.autoTable({
        startY: 70,
        head: [
            ["Sr No", "Particulars", "Quantity", "Rate", "Amount"],
        ],
        body: body,
        theme: "grid",
        styles: {
            font: "times",
            fontSize: 11,
            cellPadding: 3,
            halign: "center",
            valign: "middle",
            lineColor: [0, 0, 0],
            lineWidth: 0.2,
        },
        headStyles: {
            fillColor: [245, 245, 245],
            textColor: 0,
            font: "times",
            fontSize: 12,
            fontStyle: "bold",
            cellPadding: 4,
            halign: "center",
        },
        bodyStyles: {
            fillColor: [245, 245, 245],
            lineColor: [0, 0, 0],
            lineWidth: 0.3,
            textColor: 0,
        },
        alternateRowStyles: {
            fillColor: [255, 255, 255],
            textColor: 0,
        },
        columnStyles: {
            0: { cellWidth: 15 },
            1: { cellWidth: "auto", halign: "left" },
            2: { cellWidth: 26 },
            3: { cellWidth: 28 },
            4: { cellWidth: 36 },
        },
<<<<<<< HEAD
        margin: { top: 70, left: 15, right: 15, bottom: 20 },
        tableWidth: "auto",
=======
        margin: { horizontal: 5 },
>>>>>>> 957435ccf6eeaa75c12c973004d2f3d07068a042
        didDrawPage: (data) => {
            // Add page number in footer
            const pageCount = doc.internal.getNumberOfPages();
            doc.setFontSize(10);
            doc.text(
                `Page ${data.pageNumber} of ${pageCount}`,
<<<<<<< HEAD
                doc.internal.pageSize.width / 2,
=======
                105,
>>>>>>> 957435ccf6eeaa75c12c973004d2f3d07068a042
                doc.internal.pageSize.height - 10,
                { align: "center" }
            );
        },
    });

<<<<<<< HEAD
    // Add signature image and thank you message
    const finalY = doc.lastAutoTable.finalY + 20; // Position after table

    // Load signature image
    const img = new Image();
    img.src = 'assests/signature.png';

    await new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve; // Continue even if image fails to load
    });

    if (img.complete && img.naturalWidth > 0) {
        // Add signature on the right side
        const imgWidth = 50;
        const imgHeight = (img.height / img.width) * imgWidth;
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const imgData = canvas.toDataURL('image/png');

        doc.addImage(imgData, 'PNG', 140, finalY, imgWidth, imgHeight);
    }

    // Add thank you message below the signature
    const thankYouY = finalY + 30;
    doc.setFontSize(14);
    doc.setFont("times", "bold");
    doc.setTextColor(220, 53, 69); // Red color to match company theme
    doc.text("Thank You for Your Business!", 105, thankYouY, { align: "center" });

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    doc.setTextColor(0, 0, 0);
    doc.text("We appreciate your trust and look forward to serving you again.", 105, thankYouY + 10, { align: "center" });
    // Get filename from user
    const userFilename = prompt("Enter PDF filename:", "invoice");
    if (!userFilename) return; // Cancel if no input

    // Get current datetime in IST
    const now = new Date();
    const istTime = now.toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).replace(/[/,: ]/g, '_'); // Replace separators with _

    const filename = `${userFilename}_${istTime}.pdf`;

    // Save the PDF
    doc.save(filename);
=======
    // Save the PDF with a filename
    doc.save(`invoice_${new Date().getTime()}.pdf`);
>>>>>>> 957435ccf6eeaa75c12c973004d2f3d07068a042
}

// Add initial row
addNewRow();
