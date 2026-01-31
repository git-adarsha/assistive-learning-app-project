window.setTimeout(() => {
    
    console.log("setting data")
    tidioChatApi.setVisitorData({
    email: 'christopher.test@gmail.com',
    name: 'christopher',
});
    window.tidioChatApi.messageFromVisitor("I am playing food chain image ordering game please help me");

}, 5000)