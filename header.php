<?php

?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="shortcut icon" href="./images/common/apple-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="57x57" href="./images/common/apple-icon-57x57.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
    <link rel="stylesheet" href="./style/reset.css">
    <link rel="stylesheet" href="./style/common.css">
    <link rel="stylesheet" href="./style/index.css">
    <title><?=$title;?></title>   
</head>
<body>
    <header id="navBar">
        <div class="gnb layout-marginAuto">
            <div class="inner">
                <div class="logo">
                    <h1><?=$title;?>
                        <a href="sub\index.php">
                            <img class="logoColor" src="./images/common/logo.png" alt="logo">
                            <img class="logoWhite" src="./images/common/logo_white.png" alt="logo">
                        </a>
                    </h1>
                </div>
                <nav class="lnb-container">
                    <ul>
                        <li><a href="sub\what_hhc.php">hhc</a>
                            <ul class="lnb">
                                <li><a href="sub\what_hhc.php">what is hhc?</a></li>
                                <li><a href="#">hhc Driven Innovation</a></li>
                            </ul>
                        </li>
                        <li><a href="sub\product.php">제품</a>
                            <ul class="lnb">
                                <li><a href="sub\product.php">한국에자이 제품</a></li>
                                <li><a href="#">치매증상 치료제</a>
                                </li>
                                <li><a href="">뇌전증 치료제</a>
                                </li>
                                <li><a href="#">다발성경화증 치료제</a>
                                </li>
                                <li><a href="#">고형암 및 혈액암 치료제</a>
                                </li>
                                <li><a href="#">위장관계질환 치료제</a>
                                </li>
                                <li><a href="#">구강·안구 건조증 치료제</a>
                                </li>
                                <li><a href="#">파킨슨병 치료제</a>
                                </li>
                                <li><a href="#">허가사항변경공지</a></li>
                            </ul>
                        </li>
                        <li><a href="#">채용</a></li>
                        <li><a href="sub\innovation.php">기업사회혁신</a>
                            <ul class="lnb">
                                <li><a href="#">hhc Activity</a></li>
                                <li><a href="#">hhc Solution</a></li>
                                <li><a href="#">나를 있게 하는 우리</a></li>
                            </ul>
                        </li>
                        <li><a href="sub\company_introduction.php">회사소개</a>
                            <ul class="lnb">
                                <li><a href="#">Message from Top Management</a></li>
                                <li><a href="#">Corporate Vision</a></li>
                                <li><a href="#">즐거운 우리 일터</a></li>
                                <li><a href="#">일하기 좋은 회사</a></li>
                                <li><a href="#">Global Eisai</a></li>
                                <li><a href="#">News</a></li>
                            </ul>
                        </li>
                        <li><a href="sub\ecosystem.php">Ecosystem</a>
                            <ul class="lnb">
                                <li><a href="sub\ecosystem.php">What is HED?</a></li>
                                <li><a href="#">Press Release</a></li>
                                <li><a href="#">Partnership Proposal</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div class="contact">
                    <span><a href="#">Contact Us</a></span>
                </div>
                <nav class="ham-navigation">
                    <div class="ham-btn">
                        <span class="ham hamTop"></span>
                        <span class="ham hamMid"></span>
                        <span class="ham hamBot"></span>
                    </div>
                    <ul class="ham-lnb">
                        <li>
                            <span class="ham-title">
                                hhc<i class='bx bx-chevron-down'></i>
                            </span>
                            <a href="sub\what_hhc.php">hhc
                            </a>
                            <ul class="ham-subnav">
                                <li><a href="sub\what_hhc.php">what is hhc?</a></li>
                                <li><a href="#">hhc Driven Innovation</a></li>
                            </ul>
                        </li>
                        <li>
                            <span class="ham-title">
                                제품<i class='bx bx-chevron-down'></i>
                            </span>
                            <a href="sub\product.php">제품
                            </a>
                            <ul class="ham-subnav">
                                <li><a href="sub\product.php">한국에자이 제품</a></li>
                                <li><a href="#">치매증상 치료제</a>
                                    <ul class="lnb2">
                                        <li><a href="#">- 아리셉트</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">뇌전증 치료제</a>
                                    <ul class="lnb2">
                                        <li><a href="#">- 파이콤파</a></li>
                                        <li><a href="#">- 엑세그란</a></li>
                                        <li><a href="#">- 이노베론</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">다발성경화증 치료제</a>
                                    <ul class="lnb2">
                                        <li><a href="#">- 텍피데라</a></li>
                                        <li><a href="#">- 아보넥스</a></li>
                                        <li><a href="#">- 티사브리</a></li>
                                        <li><a href="#">- 플레그리디</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">고형암 및 혈액암 치료제</a>
                                    <ul class="lnb2">
                                        <li><a href="#">- 렌비마</a></li>
                                        <li><a href="#">- 할라벤</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">위장관계질환 치료제</a>
                                    <ul class="lnb2">
                                        <li><a href="#">- 파리에트</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">구강·안구 건조증 치료제</a>
                                    <ul class="lnb2">
                                        <li><a href="#">- 살라겐</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">파킨슨병 치료제</a>
                                    <ul class="lnb2">
                                        <li><a href="#">- 에피퀴나</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">허가사항변경공지</a></li>
                            </ul>
                        </li>
                        <li>
                            <span class="ham-title">
                                채용<i class='bx bx-chevron-down'></i>
                            </span>
                            <a href="#">채용</a>
                            <ul class="ham-subnav">
                                <li><a href="#">한국에자이는 여러분의 의미있는 도전을 기다립니다.</a></li>
                            </ul>
                        </li>
                        <li>
                            <span class="ham-title">
                                기업사회혁신<i class='bx bx-chevron-down'></i>
                            </span>
                            <a href="sub\innovation.php">기업사회혁신
                            </a>
                            <ul class="ham-subnav">
                                <li><a href="sub\innovation.php">hhc Activity</a></li>
                                <li><a href="#">hhc Solution</a></li>
                                <li><a href="#">나를 있게 하는 우리</a></li>
                            </ul>
                        </li>
                        <li>
                            <span class="ham-title">
                                회사소개<i class='bx bx-chevron-down'></i>
                            </span>
                            <a href="sub\company_introduction.php">회사소개
                            </a>
                            <ul class="ham-subnav">
                                <li><a href="sub\company_introduction.php">Message from Top Management</a></li>
                                <li><a href="#">Corporate Vision</a></li>
                                <li><a href="#">즐거운 우리 일터</a></li>
                                <li><a href="#">일하기 좋은 회사</a></li>
                                <li><a href="#">Global Eisai</a></li>
                                <li><a href="#">News</a></li>
                            </ul>
                        </li>
                        <li> 
                            <span class="ham-title">
                                Ecosystem<i class='bx bx-chevron-down'></i>
                            </span>
                            <a href="sub\ecosystem.php">Ecosystem
                            </a>
                            <ul class="ham-subnav">
                                <li><a href="sub\ecosystem.php">What is HED?</a></li>
                                <li><a href="#">Press Release</a></li>
                                <li><a href="#">Partnership Proposal</a></li>
                            </ul>
                        </li>
                    </ul>
            </nav>
            </div>
        </div>
    </header>