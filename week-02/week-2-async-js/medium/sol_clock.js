function ComputerTime() {
    const date = new Date();
     // 24-hour format
    const hours24 = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    
    // 12-hour format
    const hours12 = ((date.getHours() + 11) % 12 + 1).toString().padStart(2, '0');
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    console.log(`24Hours Format :${hours24}:${minutes}:${seconds}`);
    console.log(`12Hours Format :${hours12}:${minutes}:${seconds} ${ampm}`);
    setTimeout(ComputerTime,1000)
}
ComputerTime();

