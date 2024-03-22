var detailsBox = document.getElementById('details-box');

document.addEventListener('mouseover', function (e) {
  if (e.target.tagName == 'path') {
    var content = e.target.dataset.name;
    detailsBox.innerHTML = content;
    detailsBox.style.opacity = "100%";
  }
  else {
    detailsBox.style.opacity = "0%";
  }
});

window.onmousemove = function (e) {
  var x = e.clientX,
      y = e.clientY;
  detailsBox.style.top = (y + 20) + 'px';
  detailsBox.style.left = (x) + 'px';
};

document.addEventListener('click', function (e) {
  if (e.target.tagName === 'path') {
    window.open('https://www.fivetalentsrealty.com/va-loan-pre-qualification', '_blank');
  }
});

// Function to highlight the state on the map when selected from the dropdown
function highlightState(stateId) {
  var paths = document.getElementsByTagName('path');
  for (var i = 0; i < paths.length; i++) {
    if (paths[i].id === stateId) {
      paths[i].classList.add('highlighted');
    } else {
      paths[i].classList.remove('highlighted');
    }
  }
}

// Add an onchange event to the dropdown
document.getElementById('stateDropdown').addEventListener('change', function(e) {
  highlightState(e.target.value);
});

// Modify the existing mouseover event to also update the dropdown
document.addEventListener('mouseover', function (e) {
  if (e.target.tagName === 'path') {
    var stateId = e.target.id;
    document.getElementById('stateDropdown').value = stateId;
    var stateName = e.target.dataset.name;
    detailsBox.innerHTML = stateName;
    detailsBox.style.opacity = "100%";
  } else {
    detailsBox.style.opacity = "0%";
  }
});

