let word = 'дед';

function isPalindrome(word) {
    let matches = 0;
    for (let i = 0; i < word.length; i++) {
        if (word[i] === word[word.length - 1 - i]) {
            matches++;
        }
    }
    return matches === word.length ? 'Palindrome!' : 'Not a palindrome!';
}

console.log(isPalindrome(word));