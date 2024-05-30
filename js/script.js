var selectedRow = null;

function onFormSubmit() {
  if (validate()) {
    var formData = readFormData();
    if (selectedRow == null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm();
  }
}

function readFormData() {
  var formData = {};
  formData["fullName"] = document.getElementById("fullName").value;
  formData["empCode"] = document.getElementById("empCode").value;
  formData["salary"] = document.getElementById("salary").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document
    .getElementById("employeeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.fullName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.empCode;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.salary;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = `<a onClick="onEdit(this)">    <img src="images/edit.png" alt="" class="edit"> </a>
                       <a onClick="onDelete(this)">    <img src="images/delate.png" alt="" class="edit"> </a>`;
}

function resetForm() {
  document.getElementById("fullName").value = "";
  document.getElementById("empCode").value = "";
  document.getElementById("salary").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
  document.getElementById("salary").value = selectedRow.cells[2].innerHTML;

}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullName;
  selectedRow.cells[1].innerHTML = formData.empCode;
  selectedRow.cells[2].innerHTML = formData.salary;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
  }
}
function validate() {
  isValid = true;
  if (document.getElementById("fullName").value == "") {
    isValid = false;
  } else {
    isValid = true;
  }
  return isValid;
}







let profilePic = document.getElementById("profile-pic");
let profilePicc = document.getElementById("profile-pic1");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function () {
  profilePic.src = URL.createObjectURL(inputFile.files[0]);
  profilePicc.src = URL.createObjectURL(inputFile.files[0]);
}