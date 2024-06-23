function calculateSamplerAndEncoder() {
    var samplingFrequency = document.getElementById('samplingFrequency').value;
    var numberOfSamples = document.getElementById('numberOfSamples').value;
    var numberOfBits = samplingFrequency * numberOfSamples; // Simplified calculation
    var result = 'Number of Bits: ' + numberOfBits; // Example result
    document.getElementById('result').innerHTML = result;
}
