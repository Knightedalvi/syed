document.addEventListener("DOMContentLoaded", function () {
    const metricsData = [
        { name: "MAX QUEUED TIME", value: 259.403 },
        { name: "SUM CONTACTS ANSWERED IN X", value: 33 },
        { name: "SUM RETRY CALLBACK ATTEMPTS", value: 0 },
        { name: "AVG QUEUE ANSWER TIME", value: 14.975883720930232 },
        { name: "CONTACTS ABANDONED", value: 8 },
        { name: "AVG HANDLE TIME", value: 1063.7333999999998 },
        { name: "CONTACTS HANDLED", value: 45 },
    ];

    const tableBody = document.getElementById("metrics-table");

    metricsData.forEach((metric) => {
        let row = document.createElement("tr");

        let nameCell = document.createElement("td");
        nameCell.textContent = metric.name;

        let valueCell = document.createElement("td");
        valueCell.textContent = metric.value;

        row.appendChild(nameCell);
        row.appendChild(valueCell);
        tableBody.appendChild(row);
    });
});

function channelWiseMetrics() {
    alert("Navigating to Channel Wise Metrics...");
}

function backToQueueDetails() {
    alert("Navigating back to Queue Details...");
}
