const countdown = () => {

    // Setup to always show x days from now
    const now = new Date();
    const futureDate = now.setDate(now.getDate() + 3)
    console.log(new Date(futureDate));
}

