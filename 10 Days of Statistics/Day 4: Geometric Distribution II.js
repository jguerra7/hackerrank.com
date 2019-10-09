/*
Objective
In this challenge, we go further with geometric distributions. We recommend reviewing the Geometric Distribution tutorial before attempting this challenge.

Task
The probability that a machine produces a defective product is . What is the probability that the  defect is found during the first  inspections?

Input Format

The first line contains the respective space-separated numerator and denominator for the probability of a defect, and the second line contains the inspection we want the probability of the first defect being discovered by:

1 3
5
If you do not wish to read this information from stdin, you can hard-code it into your program.

Output Format

Print a single line denoting the answer, rounded to a scale of  decimal places (i.e.,  format).
*/
function processData(input) {
    function main(favourable, total, n) {
    let p = favourable / total;
    let res = 0;
    for (let i = 1; i <= n; i++) { 
        res += solve(i, p);
    }
    console.log(res.toFixed(3));
}

    function solve(n, p) {
    return Math.pow(1 - p, n - 1) * p;
    }
    let a = input.split`\n`
    return main(a[0].split` `[0]*1,a[0].split` `[1]*1,a[1]*1)
} 
