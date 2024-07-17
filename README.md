javaScript로 toggle 메뉴를 만들어보았습니다. </br>
toggle() 메서드는 선택한 요소가 화면에 있으면 숨겨주고, 숨겨진 상태면 다시 보이게 하는 메서드입니다. </br>
`if(headerNav.classList.contains("hidden")) {
  headerNav.classList.remove("hidden");
} else {
  headerNav.classList.add("hidden");
}`</br>
로 처리할 수도 있지만, </br>
toggle() 메서드를 이용해 코드를 더 짧고 간결하게 처리할 수 있었습니다.
