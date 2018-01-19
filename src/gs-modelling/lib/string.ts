/**
 * Strings are a type of data that contains text in the form of alphanumeric characters and symbols.<br/>
 *
 * They are enclosed in quotation marks.<br/>
 * Regular expressions can also be used to search for character matches in strings.
 */

/**
 *
 */

import * as gs from "gs-json";

//  ===============================================================================================================
//  String functions ==============================================================================================
//  ===============================================================================================================

/**
 * Checks if a string ends with the characters of a specified string
 * @param str_1 String to check
 * @param str_2 String of characters to check for
 * @returns True if str_1 ends with str_2, false if str_1 does not end with str_2
 * Example:<br/>
 * <code>
 * string = "Orange"
 * ends = String.endsWith(string,"e")
 * //Expected value of ends is true
 * </code>
 */
export function endsWith(str_1: string, str_2: string): boolean {
    return str_1.endsWith(str_2);
}

/**
 * Checks if a string contains a specified string of characters
 * @param str_1 String to check
 * @param str_2 String to search for
 * @returns True if str_1 contains str_2, false if str_1 does not contain str_2
 * Example:<br/>
 * <code>
 * string = "Orange"
 * incl = String.includes(string,"an")
 * //Expected value of incl is true
 * </code>
 */
export function includes(str_1: string, str_2: string): boolean {
    return str_1.includes(str_2);
}

/**
 * Returns the number of characters in a string
 * @param str String to find length of
 * @returns Length of string
 * Example:<br/>
 * <code>
 * string = "Orange"
 * length = String.len(string)
 * //Expected value of length is 6
 * </code>
 */
export function len(str: string): number {
    return str.length;
}

/**
 * Searches for a specified string of characters in a string and replaces them with another specified string
 * of characters
 *
 * To perfrom a case-insensitive search, use <code>/string/i</code> instead of <code>"string"</code> in search
 * @param str_1 String
 * @param str_2 String to search for
 * @param str_3 String to replace search value with
 * @returns New string with replaced characters
 * Example:<br/>
 * <code>
 * string = "Orange"
 * newString = String.Replace(string,"O","Ar")
 * //Expected value of newString is "Arrange"
 * </code>
 */
export function replace(str_1: string, str_2: string, str_3: string): string {
    return str_1.replace(str_2,str_3);
}

/**
 * Returns the position index of where a specified string of characters can be found within a string
 *
 * If specified string of characters cannot be found, returns -1
 * @param str_1 String to check
 * @param str_2 String of characters to check for
 * @returns Number that represents position of str_1 in str_2
 * Example:<br/>
 * <code>
 * string = "Orange"
 * search = String.search(string,"e")
 * //Expected value of search is 5
 * </code>
 */
export function search(str_1: string, str_2: string): number {
    return str_1.search(str_2);
}

/**
 * Splits a string into a list of substrings using a specified string of characters as a separator
 * @param str String
 * @param separator String of characters used to split string
 * @returns List of substrings
 * Example:<br/>
 * <code>
 * string = "Orange"
 * split = String.split(string,"a")
 * //Expected value of split is ["Or","nge"]
 * </code>
 */
export function split(str: string, separator: string): string[] {
    return str.split(separator);
}

/**
 * Extracts characters in a string between 2 specified indices and returns it as a new string
 *
 * Start index is inclusive and end index is exclusive
 * @param str String
 * @param start Index to start extracting characters
 * @param end Index to stop extracting characters
 * @returns New string with extracted characters
 * Example:<br/>
 * <code>
 * string = "Orange"
 * substring = String.substring(string,1,4)
 * //Expected value of ends is "ran"
 * </code>
 */
export function substring(str: string, start: number, end: number): string {
    return str.substring(start,end);
}
