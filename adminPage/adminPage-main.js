// 라인 차트
var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: ["11/20", "11/21", "11/22", "11/23", "11/24", "11/25", "11/26"],
    datasets: [
      {
        label: "트래픽",
        borderColor: "rgb(102, 178, 255)",
        data: [4, 10, 17, 3, 20, 30, 45],
      },
    ],
  },

  // Configuration options go here
  options: {
    maintainAspectRatio: false,
  },
});

// 막대 차트
var ctx = document.getElementById("total-chart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["11/20", "11/21", "11/22", "11/23", "11/24", "11/25", "11/26"],
    datasets: [
      {
        label: "회원가입",
        data: [6, 8, 6, 5, 12, 7, 8],
        backgroundColor: "rgba(233,154,154,.5)",
        borderColor: "#CBCE91",
        borderWidth: 1,
      },
      {
        label: "질문 수",
        data: [5, 7, 8, 4, 10, 5, 5],
        backgroundColor: "rgba(165,195,242,.5)",
        borderColor: "#CBCE91",
        borderWidth: 1,
      },
      {
        label: "답변 수",
        data: [1, 4, 4, 5, 8, 5, 7],
        backgroundColor: "rgba(254,228,158,.5)",
        borderColor: "#CBCE91",
        borderWidth: 1,
      },
    ],
  },
  options: {
    maintainAspectRatio: false, //그래프의 비율 유지
  },
});
