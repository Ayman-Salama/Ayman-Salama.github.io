function calculateOutputs() {
    const timeSlots = parseFloat(document.getElementById('timeSlots').value);
    const totalArea = parseFloat(document.getElementById('totalArea').value);
    const totalUsers = parseFloat(document.getElementById('totalUsers').value);
    const callsPerDay = parseFloat(document.getElementById('callsPerDay').value);
    const avgCallDuration = parseFloat(document.getElementById('avgCallDuration').value);
    const GOS = parseFloat(document.getElementById('GOS').value);
    const SIRDB = parseFloat(document.getElementById('SIR').value);
    const refDistance = parseFloat(document.getElementById('refDistance').value);
    const powerAtRefDistanceDB = parseFloat(document.getElementById('powerAtRefDistance').value);
    const pathLossExponent = parseFloat(document.getElementById('pathLossExponent').value);
    const receiverSensitivity = parseFloat(document.getElementById('receiverSensitivity').value);

    const powerAtRefDistance = Math.pow(10, powerAtRefDistanceDB / 10);
    const SIR = Math.pow(10, SIRDB / 10);

    const maxDistance = refDistance / Math.pow((receiverSensitivity*Math.pow(10,-6)) / powerAtRefDistance, 1 / pathLossExponent);
    const maxCellSize = ((3 * Math.sqrt(3) / 2) * Math.pow(maxDistance, 2));
    const numCells = totalArea / maxCellSize;
    const cellTrafficErlangs = callsPerDay * avgCallDuration * (1/(24*60)) * totalUsers;
    const cellTraffic = cellTrafficErlangs / numCells;
    const cellsInCluster = (1/3) * Math.pow((6 * SIR), (2 / pathLossExponent));

    document.getElementById('maxDistance').textContent = `a. maximum distance between transmitter and receiver for reliable communication: ${maxDistance.toFixed(2)} meters`;
    document.getElementById('maxCellSize').textContent = `b. maximum cell size assuming hexagonal cells: ${maxCellSize.toFixed(2)} square meters`;
    document.getElementById('numCells').textContent = `c. the number of cells in the service area: ${numCells.toFixed(0)} cells`;
    document.getElementById('cellTrafficErlangs').textContent = `d. traffic load in each cell in Erlangs: ${cellTrafficErlangs.toFixed(2)} Erlang`;
    document.getElementById('cellTraffic').textContent = `e. traffic load in each cell: ${cellTraffic.toFixed(2)} Erlang`;
    document.getElementById('cellsInCluster').textContent = `f. number of cells in each cluster: ${cellsInCluster.toFixed(2)}`;

    document.getElementById('results').classList.remove('hidden');
}
