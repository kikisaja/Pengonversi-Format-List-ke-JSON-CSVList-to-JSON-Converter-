// --- AMBIL ELEMEN DOM ---
const inputText = document.getElementById("input-text");
const jsonModeSelect = document.getElementById("json-mode");
const outputCode = document.getElementById("output-code");
const copyBtn = document.getElementById("copy-btn");
const downloadBtn = document.getElementById("download-btn");
const btnLoadSample = document.getElementById("btn-load-sample");
const toast = document.getElementById("toast");

// --- 1. FUNGSI KONVERSI TEKS KE JSON ---
function convertListToJson() {
    const text = inputText.value;
    const mode = jsonModeSelect.value;

    // Pecah teks per baris, buang baris kosong atau spasi kosong
    const lines = text
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line.length > 0);

    let jsonResult = "";

    if (mode === "array-string") {
        // Format: ["Item 1", "Item 2"]
        jsonResult = JSON.stringify(lines, null, 2);
    } else if (mode === "array-object") {
        // Format: [{"value": "Item 1"}, {"value": "Item 2"}]
        const objArray = lines.map((line) => ({ value: line }));
        jsonResult = JSON.stringify(objArray, null, 2);
    }

    outputCode.textContent = jsonResult;
}

// --- 2. FITUR SALIN KE CLIPBOARD ---
copyBtn.addEventListener("click", () => {
    const textToCopy = outputCode.textContent;
    if (!textToCopy) return;

    navigator.clipboard.writeText(textToCopy).then(() => {
        showToast("Format JSON berhasil disalin! 🚀");
    });
});

// --- 3. FITUR UNDUH FILE .JSON ---
downloadBtn.addEventListener("click", () => {
    const jsonContent = outputCode.textContent;
    if (!jsonContent) return;

    const blob = new Blob([jsonContent], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data-list.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast("File data-list.json berhasil diunduh! 💾");
});

// --- 4. TOMBOL CONTOH SAMPEL ---
btnLoadSample.addEventListener("click", () => {
    inputText.value = "Apel\nMangga\nJeruk\nPisang";
    convertListToJson();
});

function showToast(message) {
    toast.textContent = message;
    toast.classList.remove("hidden");
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 2000);
}

// --- EVENT LISTENERS ---
inputText.addEventListener("input", convertListToJson);
jsonModeSelect.addEventListener("change", convertListToJson);

// Inisialisasi awal
convertListToJson();
