'unsafe-eval'
'self'
'unsafe-inline'

const 숫자 = ["", "일", "이", "삼", "사", "오", "육", "칠", "팔", "구"];
const 단위 = ["십", "백", "천", "만"];

const 만들어진수 = [[]];

for (let 아이 = 0; 아이 < 10; 아이++) {
    Function(`${숫자[아이] == "" ? "영" : 숫자[아이]}=${아이}`)();
    만들어진수[0].push({ 네임: 숫자[아이], 넘버: 아이 });
}

for (let 아이 = 0; 아이 < 단위.length; 아이++) {
    const 지금단위 = Math.pow(10, 아이 + 1);
    만들어진수.push([]);
    for (let 제이 = 1; 제이 < 10; 제이++) {
        for (let 케이 = 0; 케이 <= 만들어진수.length - 2; 케이++) {
            만들어진수[케이].forEach(수 => {
                const 네임 = `${숫자[제이] == "일" ? "" : 숫자[제이]}${단위[아이]}${수.네임}`;
                const 넘버 = 지금단위 * (제이) + 수.넘버;

                Function(`${네임}=${넘버}`)();
                만들어진수[만들어진수.length - 1].push({ 네임: 네임, 넘버: 넘버 });

                if (넘버 % 3000 == 0) {
                    console.clear();
                    console.log(`${(넘버 * 100) / (99999)}% loaded`);
                }
            });
        }
    }
}
console.clear();
console.log(`100% loaded`);
