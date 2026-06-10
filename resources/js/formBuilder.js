import Sortable from "sortablejs";

console.log("formBuilder loaded");

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".field-btn");
    const canvas = document.getElementById("canvas");

    // Drag & Drop
    Sortable.create(canvas, {
        animation: 150,
        draggable: ".field-item",
    });

    // Add fields
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const type = button.dataset.type;

            let html = "";

            if (type === "text") {
                html = `
                    <div class="field-item mb-2">
                        <div class="card p-3">
                            <div class="d-flex justify-content-between mb-2">
                                <small>Text Input</small>
                                <div>
                                    <button class="btn btn-sm btn-danger delete-btn">X</button>
                                    <button class="btn btn-sm btn-secondary duplicate-btn">⧉</button>
                                </div>
                            </div>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                `;
            }

            if (type === "textarea") {
                html = `
                    <div class="field-item mb-2">
                        <div class="card p-3">
                            <div class="d-flex justify-content-between mb-2">
                                <small>Text Area</small>
                                <div>
                                    <button class="btn btn-sm btn-danger delete-btn">X</button>
                                    <button class="btn btn-sm btn-secondary duplicate-btn">⧉</button>
                                </div>
                            </div>
                            <textarea class="form-control"></textarea>
                        </div>
                    </div>
                `;
            }
            if (type === "number") {
                html = `
                    <div class="field-item mb-2">
                        <div class="card p-3">
                            <div class="d-flex justify-content-between mb-2">
                                <small>Number Input</small>
                                <div>
                                    <button class="btn btn-sm btn-danger delete-btn">X</button>
                                    <button class="btn btn-sm btn-secondary duplicate-btn">⧉</button>
                                </div>
                            </div>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                `;
            }
            if (type === "dropdown") {
                html = `
                    <div class="field-item mb-2">
                        <div class="card p-3">
                            <div class="d-flex justify-content-between mb-2">
                                <small>Dropdown</small>
                                <div>
                                    <button class="btn btn-sm btn-danger delete-btn">X</button>
                                    <button class="btn btn-sm btn-secondary duplicate-btn">⧉</button>
                                </div>
                            </div>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                `;
            }
            if (type === "radio") {
                html = `
                    <div class="field-item mb-2">
                        <div class="card p-3">
                            <div class="d-flex justify-content-between mb-2">
                                <small>Radio Button</small>
                                <div>
                                    <button class="btn btn-sm btn-danger delete-btn">X</button>
                                    <button class="btn btn-sm btn-secondary duplicate-btn">⧉</button>
                                </div>
                            </div>
                            <input type="text" class="form-control">
                        </div>
                    </div>
                `;
            }

            canvas.insertAdjacentHTML("beforeend", html);
        });
    });

    // Delete + Duplicate
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete-btn")) {
            e.target.closest(".field-item").remove();
        }

        if (e.target.classList.contains("duplicate-btn")) {
            const item = e.target.closest(".field-item");
            const clone = item.cloneNode(true);
            canvas.appendChild(clone);
        }
    });
});

document.getElementById("nextBtn").addEventListener("click", () => {
    const canvas = document.getElementById("canvas");
    const fields = [];

    const items = canvas.querySelectorAll(".field-item");

    items.forEach((item) => {
        let type = "";
        const small = item.querySelector("small");

        if (small) {
            const text = small.innerText;

            if (text === "Text Input") type = "text";
            else if (text === "Text Area") type = "textarea";
            else if (text === "Number Input") type = "number";
            else if (text === "Dropdown") type = "dropdown";
            else if (text === "Radio Button") type = "radio";
        }

        fields.push({
            type,
            label: small ? small.innerText : "",
            required: false,
        });
    });

    console.log("FORM JSON:", fields);
});

// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById("nextBtn").addEventListener("click", () => {
//         const fields = [];

//         const items = canvas.querySelectorAll(".field-item");

//         items.forEach((item) => {
//             let type = "";

//             if (item.querySelector("input[type='text']")) {
//                 type = "text";
//             } else if (item.querySelector("textarea")) {
//                 type = "textarea";
//             } else if (item.querySelector("input[type='number']")) {
//                 type = "number";
//             } else if (item.querySelector("select")) {
//                 type = "dropdown";
//             } else if (item.querySelector("input[type='radio']")) {
//                 type = "radio";
//             }

//             const label = item.querySelector("small")?.innerText || "";

//             fields.push({
//                 type,
//                 label,
//                 required: false,
//             });
//         });

//         console.log("FORM JSON:", fields);
//     });
// });

// document.getElementById("nextBtn").addEventListener("click", () => {
//     const fields = [];

//     const items = canvas.querySelectorAll(".field-item");

//     items.forEach((item) => {
//         let type = "";

//         if (item.querySelector("input[type='text']")) {
//             type = "text";
//         } else if (item.querySelector("textarea")) {
//             type = "textarea";
//         } else if (item.querySelector("input[type='number']")) {
//             type = "number";
//         } else if (item.querySelector("select")) {
//             type = "dropdown";
//         } else if (item.querySelector("input[type='radio']")) {
//             type = "radio";
//         }

//         const label = item.querySelector("small")?.innerText || "";

//         fields.push({
//             type,
//             label,
//             required: false,
//         });
//     });

//     console.log("FORM JSON:", fields);
// });
