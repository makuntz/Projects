//Find the next prime.

function isPrime(n) { 
	if (n <= 1) {
        return false;
    } 
	if (n <= 3){
        return true;
    }  
	if (n%2 == 0 || n%3 == 0){
        return false; 
    } 
	for (let i=5; i*i<=n; i=i+6) 
		if (n%i == 0 || n%(i+2) == 0) 
		return false; 
	
	return true; 
} 

function nextPrime(N){ 
	if (N <= 1) {
        return 2; 
    }
	
	let prime = N; 
	let found = false; 

	while (!found) { 
		prime++; 

		if (isPrime(prime)) 
			found = true; 
	} 

	return prime; 
} 

console.log(nextPrime(5));