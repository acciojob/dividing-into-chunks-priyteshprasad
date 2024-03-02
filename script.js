// const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
	let ans = []
	let subArr = []
		let sum = 0;
	for(let i=0; i< arr.length; i++){
		if(sum + arr[i] > n){
			ans.push(subArr);
			subArr = [arr[i]]
			sum = arr[i];
		}else{
			sum += arr[i]
			subArr.push(arr[i])
		}
		
	}
	if(subArr.length > 0){
		ans.push(subArr)
	}
	return ans;
  // Write your code here
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));
