import { Box } from "@chakra-ui/react";
import { FC } from "react";

interface ILogo {
  w?: string | { [key: string]: string };
  h?: string | { [key: string]: string };
}

const Logo: FC<ILogo> = ({ w = "111px", h = "111px" }) => (
  <Box w={w} h={h}>
    <svg viewBox="0 0 111 111" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="55.5" cy="55.5" r="55.5" fill="#3475EF" />
      <path
        d="M23.5 83L12.5 90.5L15 93.5L25.5 98.5L51 105.5L85 102L96.5 93L99 90L98.5 87L94 82L85 76.5L74.5 53.5L75.5 53L76.5 51.5L77.5 47.5L78.5 44V40.5L77.5 37.5L76 35.5L73 30.5L65.5 17.5L51 15.5L39 18.5L38 21.5L36 24.5L34 31L33.5 39L34 41L33 41.5L31.5 42.5L31 44L31.5 46.5L33 49L35 50.5L36.5 54L37 56L37.5 60.5L40 66.5L23.5 83Z"
        fill="white"
      />
      <mask
        id="mask0_150_2"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="111"
        height="111"
      >
        <circle
          cx="55.5"
          cy="55.5"
          r="54"
          fill="white"
          stroke="black"
          strokeWidth="3"
        />
      </mask>
      <g mask="url(#mask0_150_2)">
        <rect x="14" y="36" width="1" height="18" fill="white" />
        <rect x="24" y="37" width="1" height="31" fill="white" />
        <rect x="34" y="57" width="1" height="14" fill="white" />
        <rect x="87" y="44" width="1" height="6" fill="white" />
        <rect x="97" y="25" width="1" height="22" fill="white" />
        <rect x="11" y="36" width="7" height="12" fill="#FF0000" />
        <rect x="6" y="21" width="1" height="22" fill="white" />
        <rect x="3" y="21" width="7" height="17" fill="#FF0000" />
        <rect x="21" y="40" width="7" height="19" fill="#FF0000" />
        <path d="M31 56H37L38 64H31V56Z" fill="#FF0000" />
        <path d="M74 53H81V58H74V53Z" fill="#23FFBB" />
        <path d="M84 47H91V56H84V47Z" fill="#23FFBB" />
        <path d="M94 34H101V51H94V34Z" fill="#23FFBB" />
        <path d="M104 28H111V36H104V28Z" fill="#23FFBB" />
        <path
          d="M54.102 13.1394C49.3604 13.6286 43.2515 15.3471 39.6515 17.2161C37.6946 18.2196 36.8166 19.5618 37.1803 20.9416C37.2556 21.2176 37.381 21.5312 37.4438 21.6064C37.5441 21.7319 37.4563 21.92 37.1427 22.2963C35.8758 23.8643 34.9977 25.5076 34.2702 27.6526C33.5301 29.8854 33.2792 31.6164 33.204 35.0032C33.1036 39.3434 33.1036 39.4688 33.3294 40.1964C33.4423 40.5727 33.5175 40.8863 33.4925 40.8988C33.4799 40.9114 33.2165 40.9866 32.9029 41.0744C32.1503 41.3002 31.3475 42.103 31.1468 42.8431C31.0464 43.2069 31.0213 43.8466 31.059 44.5993C31.2095 47.2084 32.3259 49.3032 34.0444 50.1813C34.496 50.4196 34.6465 50.5701 34.7594 50.9715C34.8472 51.2349 35.236 52.2133 35.65 53.1416L36.3775 54.8225L36.4653 56.6413C36.6159 59.7522 37.1302 61.7341 38.51 64.4937L39.3253 66.1495L38.7734 66.6387C38.4849 66.9147 37.08 68.1691 35.6625 69.436C28.6129 75.733 25.6902 78.5679 23.0936 81.6537L22.0525 82.883L20.7981 83.3597C17.3235 84.6642 13.7861 86.7214 10.9261 89.0922C9.53377 90.2462 7.91562 91.8644 8.00342 92.0024C8.02851 92.0651 8.94421 92.7675 10.023 93.5829C12.3185 95.3139 15.0907 97.1453 16.8844 98.1237C26.9948 103.643 36.2145 111.283 48.8461 112.563C51.2796 112.814 59.2575 112.776 62.2053 112.5C75.7777 111.233 88.0455 102.401 97.9426 95.9411C99.6862 94.7996 102.471 92.755 103.399 91.9146L103.964 91.4128L103.663 90.8734C103.136 89.9075 101.568 87.5995 100.715 86.5458C97.491 82.5443 92.8247 78.7812 88.6225 76.8118L87.481 76.2724L87.4685 75.6327C87.456 73.5629 84.4078 65.2966 82.3005 61.6212C81.4349 60.1034 80.3436 58.6609 79.2774 57.6197C78.3491 56.7291 76.4676 55.3869 75.3888 54.8726C74.8118 54.5841 74.7867 54.559 74.8243 54.0824C74.862 53.6308 74.8996 53.5806 75.3637 53.4176C76.0536 53.1792 76.5052 52.7026 76.8188 51.8872C77.2202 50.7959 77.9227 48.1491 78.0606 47.1582C78.1234 46.669 78.3617 45.816 78.5749 45.2766C78.9763 44.2857 78.9763 44.2731 78.9011 42.5922C78.8258 40.7232 78.4495 38.3399 78.0732 37.2737C77.7596 36.358 77.3958 35.8688 76.8313 35.5802C76.3798 35.3545 76.3547 35.2917 76.0035 33.9245C74.7114 28.8944 73.1435 23.8894 72.2278 21.9326C69.443 15.9743 64.1872 12.9261 56.8365 13.0014C55.9208 13.0139 54.6915 13.0766 54.102 13.1394ZM43.1888 18.0565C43.1888 18.0816 42.8376 18.2196 42.4111 18.3827C41.1442 18.8343 39.7142 19.6245 39.2877 20.1137C38.9365 20.5151 38.8988 20.6155 38.949 21.2301C39.0117 21.9827 38.8738 21.9702 38.6981 21.205C38.4347 20.0385 39.1121 19.4489 41.8717 18.4328C43.0007 18.0189 43.1888 17.9687 43.1888 18.0565ZM62.9579 19.5242C64.7893 20.2141 65.9433 21.8197 66.4702 24.4163C66.6458 25.3069 66.6709 25.8964 66.5956 28.1669C66.558 29.647 66.4952 31.1774 66.4576 31.5537L66.3823 32.2436L67.574 33.5231C68.4395 34.4513 68.7782 34.9154 68.8284 35.2165C69.2047 37.4744 69.28 37.9385 69.3427 38.1016C69.3929 38.227 68.6528 38.7915 66.8088 40.0333C65.3788 40.9992 64.137 41.8396 64.0492 41.8772C63.9488 41.94 63.8109 41.7769 63.6603 41.4382C63.3718 40.811 62.6317 40.0333 62.0046 39.7072C61.3146 39.3559 60.2359 39.2054 58.254 39.1929L56.4226 39.1803L57.9153 38.4528C59.8596 37.4995 60.6749 37.3364 62.2053 37.6123C62.8074 37.7252 63.3342 37.8005 63.3593 37.7754C63.3844 37.7503 63.1084 37.4367 62.7446 37.0855C61.4903 35.8437 59.6589 35.2165 58.279 35.5552C57.9529 35.643 56.6358 36.2325 55.3563 36.8723C52.697 38.2144 51.7186 38.5782 50.7151 38.5782C49.8998 38.5782 49.3353 38.2772 48.8837 37.5998C48.545 37.1106 48.4071 37.2611 48.52 37.9636C48.6705 38.8416 49.3729 39.4563 50.5897 39.7699L51.1542 39.9204L50.527 40.0584C49.1973 40.372 43.8537 40.6981 43.3268 40.4974C43.0634 40.3845 43.0759 40.372 43.5777 40.2215C44.6815 39.8953 45.3213 39.1552 45.3213 38.2144C45.3213 37.3113 45.1958 37.2486 44.807 37.9385C44.5687 38.365 44.2801 38.6535 43.9665 38.8166C42.6996 39.4688 41.3951 39.243 38.4347 37.8632C36.5155 36.9726 36.2897 36.8973 35.5246 36.8973C34.9977 36.8848 34.6214 36.9475 34.496 37.0604C34.2953 37.2109 34.2827 37.0479 34.2827 34.7774C34.2827 32.9335 34.3454 31.9802 34.5211 30.9014C35.0353 27.916 36.4277 24.6797 37.933 22.9612L38.3093 22.5472L38.9867 22.9612C40.0654 23.6009 46.6886 26.5738 46.8767 26.4985C46.9771 26.4609 48.8837 25.2065 51.104 23.7138C53.3242 22.2211 55.6323 20.7535 56.2344 20.4524C58.7432 19.198 61.1641 18.8593 62.9579 19.5242ZM76.5303 36.521C77.3331 37.0855 78.0481 40.1462 78.0606 43.0438C78.0606 44.0473 78.0105 44.3107 77.6843 45.0759C77.4836 45.5651 77.2453 46.3805 77.1826 46.8822C77.0195 48.0112 76.1414 51.2098 75.8028 51.8747C75.4766 52.5144 74.8745 52.7402 74.2975 52.4391C74.0717 52.3262 73.8836 52.251 73.871 52.2761C73.8459 52.3012 73.7079 53.7562 73.5574 55.5124C73.0933 60.994 72.6543 65.1962 72.4786 66.0868C72.1776 67.5294 71.8013 68.1942 70.5093 69.4862C69.8695 70.1259 67.2353 72.735 64.6513 75.2814C60.3864 79.4836 59.9975 79.8474 60.3739 79.1575C61.5279 77.0627 63.2589 74.5664 67.0346 69.4736C69.1796 66.5886 69.9322 65.4847 70.4842 64.3934L70.9232 63.5153L69.6312 64.6694C67.2353 66.8018 63.861 69.1977 61.2394 70.6151C60.6498 70.9287 60.123 71.1921 60.0854 71.1921C60.0352 71.1921 59.985 70.9789 59.985 70.7155C59.9725 70.2514 59.9725 70.2514 59.8721 70.8284C59.7341 71.6437 59.4707 72.0828 58.7432 72.735C57.539 73.8263 56.5605 74.0271 52.0573 74.1399L48.8085 74.2278L48.8963 74.6919C49.1346 76.009 50.8531 77.3888 54.3905 79.1073L55.8706 79.8223L55.4692 79.9603C55.2434 80.0355 54.6539 80.0983 54.1396 80.0983C53.0859 80.0983 52.7598 80.2237 52.5841 80.6753C52.3458 81.3401 53.0734 82.3185 55.0929 84.0119L55.6448 84.4761L54.4155 85.8057C53.7382 86.5333 53.111 87.1228 53.0232 87.0977C52.7723 87.035 48.6203 83.1339 47.7673 82.1555C46.0237 80.161 45.0704 78.2041 45.0704 76.6487C45.0704 76.0968 45.3464 75.0306 45.66 74.3783L45.8356 73.9769L45.1457 73.3246C44.3805 72.5971 43.8913 71.7064 43.7533 70.7907C43.6906 70.3517 43.5275 70.0381 43.101 69.5489C42.3986 68.721 40.9937 66.7516 40.3163 65.6352C38.9741 63.4275 38.0584 61.132 37.7448 59.1626C37.5441 57.9835 37.3685 56.0518 37.4563 56.1396C37.4939 56.1772 37.9079 56.8546 38.3971 57.6448C39.3128 59.1626 40.1532 60.7557 40.6299 61.9097C41.0438 62.9132 40.9937 62.3864 40.5295 60.9564C40.3163 60.2665 39.6138 58.6985 38.9616 57.4567C37.1553 53.9569 35.9385 51.4733 35.8382 51.0719C35.7629 50.7457 35.7754 50.7206 35.9887 50.7959C36.4403 50.9841 39.2124 51.0342 40.1407 50.8837C42.0975 50.545 43.4523 49.4663 44.4683 47.4091L45.0077 46.3178L45.1582 46.6815C45.3715 47.1958 45.5972 48.5882 45.6976 50.0558C45.7854 51.2224 45.7854 51.1471 45.8105 49.0523C45.823 47.8105 45.8858 46.4056 45.9485 45.9289L46.0739 45.0759L45.6349 44.5867C45.1708 44.0724 45.0829 43.7212 45.3589 43.4954C45.7101 43.1944 47.83 43.0062 48.8586 43.1693C49.2475 43.232 49.3353 43.3072 49.398 43.6208C49.4733 43.9219 49.4106 44.0599 49.0342 44.4864C48.6705 44.8878 48.5952 45.0508 48.6579 45.3268C48.6956 45.515 48.8461 46.1171 48.9841 46.669C49.1221 47.2084 49.2851 48.3749 49.3478 49.2405C49.5109 51.4607 49.5485 51.536 49.5736 49.667C49.5862 48.0237 49.6991 47.1206 49.9625 46.4306L50.0879 46.0794L50.7026 46.9324C51.4677 48.0363 52.7221 49.1903 53.5375 49.5666C54.5786 50.0558 55.3438 50.1562 57.7271 50.0934C59.546 50.0433 60.0854 49.9805 60.7753 49.7548C62.1927 49.2906 63.2213 48.3248 63.7732 46.8948C63.999 46.3177 64.0617 45.8285 64.1119 44.5114L64.1621 42.8431L66.7336 41.0744C68.151 40.1086 69.3678 39.2807 69.4556 39.2556C69.5559 39.218 69.6939 39.4688 69.8319 39.9204C70.0953 40.7483 71.1365 43.2194 71.2995 43.395C71.3622 43.4703 71.4124 43.4201 71.4124 43.2571C71.4124 42.241 72.7044 39.0674 73.6452 37.788C74.5609 36.5461 75.7902 35.9942 76.5303 36.521ZM34.2827 39.2556C34.2827 39.3183 34.358 39.2681 34.4583 39.1427C34.6339 38.9044 34.6465 38.9044 35.5622 39.1929C36.0639 39.3559 37.0674 39.7197 37.795 40.0082L39.1121 40.5225L37.2932 40.6103C36.2897 40.6479 35.211 40.7232 34.8974 40.7608C34.3204 40.8361 34.3078 40.8361 34.1698 40.4347C34.0946 40.2215 33.9942 39.7197 33.9566 39.3434C33.8939 38.6911 33.9064 38.6535 34.082 38.8793C34.1949 39.0173 34.2827 39.1803 34.2827 39.2556ZM60.123 40.0835C59.8972 40.1587 60.0352 40.1838 60.5871 40.1713C61.2519 40.1462 61.4275 40.1964 61.8917 40.5225C62.707 41.0995 63.1084 41.7518 63.3467 42.9309C63.7732 44.9379 63.1711 47.2711 61.9795 48.2997C61.2645 48.9018 60.3237 49.2279 58.7557 49.3784C56.0839 49.6544 54.2399 49.3534 52.973 48.4251C51.405 47.2711 50.0879 44.6871 50.0879 42.7679C50.0879 41.6264 50.2886 41.1873 50.9535 40.8486C51.5556 40.535 53.0483 40.234 54.7291 40.096C56.4226 39.958 60.5369 39.9455 60.123 40.0835ZM49.4607 41.4131C49.3855 41.5887 49.3353 41.9023 49.3353 42.103V42.4668H47.7422C46.8516 42.4668 45.9359 42.517 45.6725 42.5797C45.2209 42.68 45.2209 42.68 45.0704 42.1657C44.9951 41.8898 44.9073 41.5887 44.8697 41.5135C44.8195 41.3755 46.8893 41.1748 48.9841 41.1121C49.5736 41.087 49.5736 41.087 49.4607 41.4131ZM43.5275 41.5511C44.2425 41.9274 44.5686 42.655 44.5686 43.8341C44.5686 45.7658 43.7157 47.8481 42.4487 49.0272C41.3198 50.0684 40.8808 50.1812 38.0459 50.1687C35.9385 50.1687 35.6625 50.1436 34.9977 49.8802C34.0569 49.5039 33.3168 48.9394 32.8151 48.1868C31.9747 46.9575 31.4353 44.3484 31.774 43.1567C31.9621 42.4919 32.6646 41.7894 33.2792 41.6515C33.4925 41.6013 33.6806 41.5887 33.6932 41.6138C34.6214 43.4076 34.6716 43.5707 34.4583 44.5491C34.2325 45.6529 34.2325 45.6279 34.5587 45.5777C34.8723 45.54 35.0604 45.2139 35.3615 44.2104L35.5622 43.4954L35.0479 42.5295C34.7594 41.9901 34.5461 41.5386 34.5712 41.5135C34.6716 41.4006 39.3002 41.2375 41.094 41.2751C42.7373 41.3128 43.1387 41.3504 43.5275 41.5511ZM90.4163 80.8634C93.2136 82.6321 95.9858 85.4294 97.3154 87.8127C98.0806 89.18 98.7579 91.2874 98.4193 91.2497C98.0555 91.2121 90.1654 81.8042 89.6135 80.7506C89.4003 80.3491 89.6637 80.3868 90.4163 80.8634ZM17.5994 88.026C17.5994 88.5528 15.5046 91.3752 13.9617 92.9181C12.3938 94.5111 11.9924 94.5613 12.6321 93.0937C13.2969 91.5884 14.89 89.6818 16.458 88.5026C17.2858 87.8754 17.5994 87.75 17.5994 88.026Z"
          fill="black"
        />
        <path
          d="M55.2309 31.3781C54.0392 31.629 52.9228 31.9802 50.4642 32.8708C49.26 33.2973 48.0182 33.7489 47.7046 33.8618L47.1401 34.0625L47.7673 33.9872C48.7583 33.8869 50.527 33.3726 53.3242 32.3816C54.7542 31.8799 56.1215 31.4032 56.3598 31.3405L56.7989 31.2025H56.4226C56.2219 31.2025 55.6825 31.2778 55.2309 31.3781Z"
          fill="black"
        />
        <path
          d="M40.6801 32.8332C40.7679 32.9335 44.2802 33.912 44.8823 34.0123C45.7603 34.1628 45.3088 33.9872 43.4397 33.4478C41.7212 32.9586 40.5421 32.6952 40.6801 32.8332Z"
          fill="black"
        />
        <path
          d="M75.4891 38.3523C75.0125 38.716 74.4731 39.9202 74.2975 40.999C74.0591 42.3788 74.1846 43.4074 74.724 44.5364C74.9748 45.0757 75.1755 45.59 75.1755 45.7029C75.1755 45.8158 75.025 46.2172 74.8369 46.581C74.5233 47.2082 74.5107 47.2834 74.6863 47.5845C74.9121 47.9984 75.439 48.0988 75.6773 47.7727C75.8278 47.5845 75.8278 47.572 75.6773 47.6974C75.4264 47.9232 75.0877 47.8981 74.9372 47.6347C74.8494 47.4716 74.8996 47.2709 75.1755 46.7942C75.7149 45.8409 75.74 45.5022 75.3762 44.6116C74.9999 43.7461 74.9748 43.0311 75.2257 41.5635C75.4139 40.56 75.8278 39.6443 76.2167 39.4059C76.4926 39.2303 76.7686 39.3934 77.1575 39.9579C77.4711 40.4345 77.5087 40.2589 77.2578 39.4185C76.8815 38.1515 76.2418 37.7627 75.4891 38.3523Z"
          fill="black"
        />
        <path
          d="M53.3995 52.5646C53.7758 53.8817 53.7006 54.7974 53.1988 54.9605C53.0608 54.9981 52.6594 54.9981 52.2957 54.9605C51.4427 54.8476 50.6273 55.2364 50.3137 55.9013C50.0127 56.5535 49.7995 56.6664 48.8461 56.7417C47.8301 56.8044 47.0774 56.5285 46.4753 55.8385C46.2746 55.6128 45.9736 55.387 45.7854 55.3368C45.2335 55.1988 45.0704 54.9354 45.0704 54.1577C45.0704 53.7688 45.1206 53.2294 45.1833 52.966C45.3464 52.3012 45.1582 52.389 44.8948 53.1165C44.506 54.2204 44.6439 55.525 45.221 55.9765C45.3088 56.0518 45.5596 56.1647 45.7603 56.2274C46.099 56.3528 46.1116 56.3654 45.8858 56.4532C43.7533 57.2184 42.5742 58.6734 42.4613 60.6554C42.4111 61.5711 42.6118 63.0387 42.7875 63.0387C42.8376 63.0387 43.0132 62.7753 43.1889 62.4366C43.6028 61.6463 44.8446 60.4296 45.6976 59.978C46.0739 59.7648 46.8391 59.4512 47.391 59.2756L48.3945 58.9369L48.4322 58.0337L48.4698 57.1431H48.8336C49.1848 57.1431 49.1973 57.1682 49.2475 57.7954L49.2977 58.4602L49.2852 57.7327C49.2726 57.1306 49.3102 57.0177 49.4984 57.0177C49.6238 57.0177 50.0002 56.7292 50.3388 56.3779L50.966 55.7257L51.6308 55.826C52.9605 56.0392 53.3368 55.9891 53.7382 55.5375C54.0393 55.2114 54.102 55.0232 54.102 54.5214C54.102 53.8692 53.8511 53.0413 53.525 52.5897C53.3494 52.3388 53.3368 52.3388 53.3995 52.5646Z"
          fill="black"
        />
        <path
          d="M51.7563 56.3151C50.5395 56.6162 49.8998 57.2559 49.7618 58.3096L49.6865 58.8615L51.104 58.9368C54.3779 59.1124 57.1125 60.003 59.2951 61.6086C59.7843 61.9724 60.1982 62.2484 60.2233 62.2233C60.2359 62.2107 60.0853 61.709 59.8596 61.1194C58.9313 58.5479 57.4386 57.1932 54.8295 56.5284C53.5249 56.2022 52.5214 56.127 51.7563 56.3151Z"
          fill="black"
        />
        <path
          d="M49.7744 60.1034C49.4608 60.279 49.3228 60.2916 48.8336 60.1661C48.3569 60.0407 48.1186 60.0658 47.2656 60.279C46.1492 60.555 44.6941 61.2324 44.1422 61.7216C43.7659 62.0728 43.7659 62.2609 44.1547 62.0602C44.2802 61.985 44.8321 61.8345 45.384 61.7216C47.228 61.3452 54.9424 61.0317 56.9745 61.27C57.6268 61.3452 58.1787 61.3829 58.2038 61.3578C58.2289 61.3327 57.6393 61.1195 56.8993 60.8686C54.6037 60.1034 50.5395 59.6769 49.7744 60.1034Z"
          fill="black"
        />
        <path
          d="M48.9966 62.8128C48.5952 63.0261 47.9053 63.3647 47.4663 63.5529L46.6509 63.8916L47.4287 64.0546C48.0559 64.1801 48.2189 64.2679 48.2566 64.4811C48.2816 64.6191 48.3694 65.0707 48.4447 65.4972C48.7583 67.2157 48.6203 67.5167 47.3283 68.0436C45.798 68.6708 45.1959 69.3983 45.1959 70.6025C45.1959 71.7942 45.798 72.6472 46.9395 73.0987C47.5792 73.3496 47.9179 73.3747 50.7904 73.4249C53.2992 73.4625 54.1396 73.4374 54.98 73.2743C57.1125 72.8729 58.0533 72.0827 58.0407 70.7029C58.0407 69.8499 57.7146 69.16 56.9996 68.5202C56.1341 67.7425 55.4567 67.4916 53.55 67.2408C52.7472 67.1279 52.1577 66.601 52.2706 66.0742C52.3207 65.886 52.3584 65.3216 52.3709 64.8198C52.3835 64.0672 52.4211 63.9167 52.5967 63.9167C52.7096 63.9167 53.111 63.8163 53.4873 63.7034L54.1647 63.4902L53.2239 63.4024C52.7096 63.3396 51.8566 63.1515 51.3423 62.9759C49.6615 62.3863 49.7869 62.3863 48.9966 62.8128Z"
          fill="black"
        />
        <path
          d="M55.7954 41.7642C54.9173 41.9649 52.973 42.6799 52.7849 42.8555C52.7096 42.9308 53.7508 42.9559 55.7327 42.9308C58.831 42.8806 59.408 42.8053 60.6499 42.3036L61.0638 42.1405L60.1857 41.9147C59.0192 41.6137 56.7738 41.5384 55.7954 41.7642Z"
          fill="black"
        />
        <path
          d="M39.3629 42.7678C38.8862 42.8556 38.0583 43.0689 37.5441 43.2194C36.6033 43.5079 36.6033 43.5079 37.0423 43.6083C38.1587 43.8591 40.6675 44.11 41.3699 44.0348C42.2605 43.947 44.3177 43.4577 44.3177 43.3449C44.3177 43.2947 43.9414 43.1316 43.4773 42.9685C42.4111 42.6173 40.5922 42.5295 39.3629 42.7678Z"
          fill="black"
        />
      </g>
    </svg>
  </Box>
);

export default Logo;
