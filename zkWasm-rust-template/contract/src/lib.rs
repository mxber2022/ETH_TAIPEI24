// src/lib.rs
#[no_mangle]
pub extern "C" fn check_guess(guess: u32) -> u32 {
    // Secret number (in practice, this would be a private input not visible in the final code)
    let secret: u32 = 42;

    // Return codes:
    // 0 = correct
    // 1 = too low
    // 2 = too high
    if guess == secret {
        0
    } else if guess < secret {
        1
    } else {
        2
    }
}
