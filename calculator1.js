function calculateOutputs() {
    const timeSlots = parseFloat(document.getElementById('timeSlots').value);
    const totalArea = parseFloat(document.getElementById('totalArea').value);
    const totalUsers = parseFloat(document.getElementById('totalUsers').value);
    const callsPerDay = parseFloat(document.getElementById('callsPerDay').value);
    const avgCallDuration = parseFloat(document.getElementById('avgCallDuration').value);
    const GOS = parseFloat(document.getElementById('GOS').value);
    const SIR = parseFloat(document.getElementById('SIR').value);
    const refDistance = parseFloat(document.getElementById('refDistance').value);
    const powerAtRefDistance = parseFloat(document.getElementById('powerAtRefDistance').value);
    const pathLossExponent = parseFloat(document.getElementById('pathLossExponent').value);
    const receiverSensitivity = parseFloat(document.getElementById('receiverSensitivity').value);

    const maxDistance = refDistance / Math.pow(receiverSensitivity / powerAtRefDistance, 1 / pathLossExponent);
    const maxCellSize = ((3 * Math.sqrt(3) / 2) * Math.pow(maxDistance, 2));
    const numCells = totalArea / maxCellSize;
    const cellTrafficErlangs = totalUsers * callsPerDay * avgCallDuration;
    const cellTraffic = cellTrafficErlangs / numCells;
    const cellsInCluster = (1/3) * Math.pow((6 * SIR), (2 / pathLossExponent));

    document.getElementById('maxDistance').textContent = `Maximum Distance Between Transmitter and Receiver: ${maxDistance.toFixed(2)} meters`;
    document.getElementById('maxCellSize').textContent = `Maximum Cell Size Assuming Hexagonal Cells: ${maxCellSize.toFixed(2)} square meters`;
    document.getElementById('numCells').textContent = `Number of Cells in the Service Area: ${numCells.toFixed(0)}`;
    document.getElementById('cellTrafficErlangs').textContent = `Traffic Load in Each Cell in Erlangs: ${cellTrafficErlangs.toFixed(2)} Erlangs`;
    document.getElementById('cellTraffic').textContent = `Traffic Load in Each Cell: ${cellTraffic.toFixed(2)}`;
    document.getElementById('cellsInCluster').textContent = `Number of Cells in Each Cluster: ${cellsInCluster.toFixed(2)}`;

    document.getElementById('results').classList.remove('hidden');
}
