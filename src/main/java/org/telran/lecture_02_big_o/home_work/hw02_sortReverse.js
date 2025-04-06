// В примерах /examples/BubbleSort дан алгоритм "сортировка пузырьком"
// Измените алгоритм сортировки так, чтобы сортировка шла в обратном порядке (от большего к меньшему)

// Оцените сложность алгоритма
function reverseBubbleSort(arr) {
    let n = arr.length;
for (let i = 0; i < n - 1; i++) {
         for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
 return arr;
}
let myArray = [5, 1, 4, 2, 8];
console.log("Отсортировано по убыванию:", reverseBubbleSort(myArray));
