import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const DEPLOY_PASSWORD = 'password'; // Simple hardcoded password as requested

console.log('\x1b[33m%s\x1b[0m', '⚠️  Deployment Protected ⚠️');
rl.question('Enter deployment password: ', (answer) => {
    if (answer === DEPLOY_PASSWORD) {
        console.log('\x1b[32m%s\x1b[0m', '✅ Access Granted. Starting build...');
        rl.close();
        process.exit(0);
    } else {
        console.log('\x1b[31m%s\x1b[0m', '❌ Access Denied. Incorrect password.');
        rl.close();
        process.exit(1);
    }
});
