/** 
 *  TODO: Hiện tại để có thể sử  dụng được package common-calculator
 * - Cần phải build common-calculator trước và sau đó yarn link tại thư mục common-calculator
 * - Sau đó yarn link common-calculator tại thư mục server
 * - Và cuối cùng yarn start để chạy server
 */

import calculator from 'common-calculator';

function mainMono() {
    console.log("=== run main mono repo ===")
    const result = calculator.add(3, 3)
    console.log(`=== result: ${result} ===`)
    console.log("=== end main mono repo ===")
}

mainMono()
