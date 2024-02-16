const DepositField = document.querySelector('#Deposit-fild');
const DepositSum = document.querySelector('.Deposit-sum');
const BlanceSum = document.querySelector('.Blance-sum');
const WithdrawAmount = document.querySelector('.Withdraw-anount');
const WithdrawField = document.querySelector('#Withdraw-field');

document.querySelector('#Deposit-btn').addEventListener('click', () => {
  const DepositFieldValue = parseFloat(DepositField.value);
  DepositField.value = '';
  const DepositSumValue = parseFloat(DepositSum.innerText);

  const depositTotal = DepositSumValue + DepositFieldValue;
  DepositSum.innerText = depositTotal;

  const blanceValue = parseFloat(BlanceSum.innerText);
  const blanceTotal = blanceValue + DepositFieldValue;
  BlanceSum.innerText = blanceTotal;
});

document.querySelector('#Withdraw-btn').addEventListener('click', () => {
  const WithdrawFieldValue = parseFloat(WithdrawField.value);
  WithdrawField.value = '';
  const WithdrawAmountValue = parseFloat(WithdrawAmount.innerText);

  const WithdrawTotal = WithdrawAmountValue + WithdrawFieldValue;
  WithdrawAmount.innerText = WithdrawTotal;

  const balanceTaka = parseFloat(BlanceSum.innerText);
  console.log();
  const currentBalance = balanceTaka - WithdrawFieldValue;
  BlanceSum.innerText = currentBalance;
  console.log(currentBalance);
});
