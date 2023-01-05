function function1() {
    return 'Hello';
}
// passing function function1() as a parameter
function name(user, function1)
{

    // accessing passed function
    const message = function1();
    console.log(`${message} ${user}`);
}
name('harshi', function1);
name('aadya', function1);
name('suji', function1);