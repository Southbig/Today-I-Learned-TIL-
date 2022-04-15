# Box Model

<img src="https://github.com/baeharam/Must-Know-About-Frontend/raw/main/images/css/box%20model.png">

문서상의 요소들을 **시각적인 목적**을 위해서, 모든 요소를 하나의 **"직사각형 박스"로 여기는 모델이다**

- **컨텐츠 영역(Content Area)** : 글이나 이미지, 비디오 등 요소의 실제 내용을 포함한다
- **안쪽여백 영역(Padding Area)** : 안쪽여백 경계(Padding Edge)가 감싼 영역으로 컨텐츠 영역을 요소의 안쪽 여백까지 포함하는 크기로 확장한다
- **테두리 영역(Border Area)** : 테두리 경계(Border Edge)가 감싼 영역으로, 안쪽여백 영역을 요소의 테두리까지 포함하는 크기로 확장한다
- **바깥여백 영역(Margin Area)** : 바깥여백 경계(Margin Edge)가 감싼 영역으로, 테두리 영역을 확장해 요소와 인근 요소사이의 빈 공간까지 포함하도록 한다

## box-sizing

box-sizing 속성을 사용하면, width 와 height 이 컨텐츠 영역 기준인지, 테두리 영역 기준인지 정할 수 있다

- box-sizing: content-box : **기본값**이며 **컨텐츠 영역 기준**이다. 즉, **안쪽여백 영역부터 포함하지 않는다**
- box-sizing: border-box : **테두리 영역 기준**이며 바깥여백 영역부터 포함하지 않는다.

> **box-sizing**
> box-sizing 속성은 CSS의 테두리 영역의 크기를 결정
> **content-box**은 지정한 CSS width 및 height를 **컨텐츠 영역에만 적용**, **border, padding, margin은 따로 계산**되어 **전체 영역이 설정값보다 커질 수 있습니다** > **border-box**은 지정한 CSS width 및 height를 **전체 영역에 적용**, **border, padding, margin을 모두 합산하기 때문에 컨텐츠 영역이 설정값보다 적어질 수 있다**

> **ex** > `<div>` 태그 등의 영역 크기를 100px으로 설정했을 때
> 100px 이상으로 `<div>`가 더 튀어나와서 크기를 100px으로 **딱 맞추고 싶다**? box-sizing : border-box;
> 100px 미만으로 `<div>`가 더 적게 나와서 **컨텐츠 영역만 100px으로 맞추고 싶다**? box-sizing : content-box;
