const chieuCao = 160;
const canNangLyTuong = ((chieuCao - 100) * 9) / 10;
const canNangToiDa = chieuCao - 100;
const canNangToiThieu = ((chieuCao - 100) * 8) / 10;

console.log(
  "Cân nặng lý tưởng là",
  canNangLyTuong + ", " + "cân nặng tối đa là",
  canNangToiDa + " và " + "cân nặng tối thiểu là",
  canNangToiThieu
);
