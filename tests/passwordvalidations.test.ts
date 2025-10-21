import { calculatePasswordStrength } from "../src/passwordstrength";

describe("Homework", () => {
    test("Validate strength of perfect password", () => {
        expect(calculatePasswordStrength("Abc@1234")).toBe("Strong");
    });

    test("Validate strength of short password with only letters", () => {
        expect(calculatePasswordStrength("a")).toBe("Very Weak");
    });

    test("Validate strength of short password with only numbers", () => {
        expect(calculatePasswordStrength("12345")).toBe("Very Weak");
    });

    test("Validate strength of short password with only special character", () => {
        expect(calculatePasswordStrength("@#")).toBe("Very Weak");
    });

    test("Validate strength of long password with only numbers & Lowercase letters", () => {
        expect(calculatePasswordStrength("abc12345")).toBe("Weak");
    });

    test("Validate strength of long password with only numbers & Uppercase letters", () => {
        expect(calculatePasswordStrength("ABC12345")).toBe("Weak");
    });

    test("Validate strength of short password less than 8 Characters have number,lowercase, uppercase & special character", () => {
        expect(calculatePasswordStrength("12aB@#")).toBe("Moderate");
    });

    test("Validate strength of long password less than 12 characters with numbers & lowercase letters & Uppercase letters", () => {
        expect(calculatePasswordStrength("ABcd12345")).toBe("Moderate");
    });

    test("Validate strength of long more than 12 characters with numbers & Lower case", () => {
        expect(calculatePasswordStrength("abcdf12345678")).toBe("Moderate");
    });
    test("Validate strength of long password with numbers & lowercase letters & special characters", () => {
        expect(calculatePasswordStrength("abc@#12345")).toBe("Moderate");
    });
    test("Validate strength of long password with numbers & uppercase letters & special characters", () => {
        expect(calculatePasswordStrength("ABC@#12345")).toBe("Moderate");
    });

    test("Validate strength of long password lowercase letters & uppercase letters & special characters", () => {
        expect(calculatePasswordStrength("ABC@#defgij")).toBe("Moderate");
    });
});