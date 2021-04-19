export default function Clutch(props) {
  const color = props.color || 'black'
  return (
    <svg
      width="513"
      height="513"
      viewBox="0 0 513 513"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M509.398 282.951C501.614 276.156 497.149 266.332 497.149 256C497.149 245.668 501.613 235.843 509.397 229.049C511.316 227.374 512.269 224.851 511.937 222.326C511.603 219.801 510.029 217.611 507.742 216.491L507.663 216.451C498.406 211.894 491.569 203.563 488.904 193.596C486.24 183.629 488.007 172.998 493.732 164.461L493.793 164.372C495.225 162.26 495.465 159.563 494.494 157.204C493.523 154.845 491.397 153.122 488.893 152.63C478.765 150.64 469.992 144.373 464.824 135.437C459.656 126.502 458.6 115.772 461.956 105.911C462.767 103.505 462.309 100.854 460.759 98.8421C459.21 96.8321 456.769 95.7271 454.208 95.8981C443.917 96.5911 433.805 92.8051 426.502 85.5021C419.198 78.1981 415.409 68.0991 416.105 57.7861C416.283 55.2451 415.145 52.7961 413.126 51.2421C411.107 49.6881 408.411 49.2591 406.003 50.0791C396.229 53.4041 385.503 52.3481 376.567 47.1801C367.632 42.0121 361.364 33.2391 359.361 23.0451C358.872 20.5491 357.167 18.4611 354.819 17.4851C352.467 16.5081 349.787 16.7711 347.673 18.1851L347.575 18.2501C339.007 23.9981 328.374 25.7641 318.408 23.0991C308.441 20.4341 300.11 13.5971 295.546 4.32707L295.499 4.23307C294.373 1.95607 292.183 0.392067 289.662 0.0640674C287.139 -0.262933 284.625 0.690068 282.954 2.60407C276.159 10.3881 266.335 14.8541 256.001 14.8541C245.669 14.8541 235.844 10.3891 229.05 2.60407C227.375 0.685068 224.85 -0.265933 222.326 0.0660674C219.802 0.400067 217.612 1.97407 216.491 4.26107L216.452 4.34107C211.895 13.5981 203.564 20.4341 193.597 23.0991C183.63 25.7641 172.999 23.9961 164.413 18.2391L164.324 18.1791C162.209 16.7701 159.523 16.5451 157.177 17.5221C154.832 18.4981 153.121 20.6181 152.631 23.1111C150.641 33.2391 144.373 42.0121 135.438 47.1801C126.504 52.3471 115.774 53.4051 105.921 50.0521C103.516 49.2391 100.863 49.6931 98.846 51.2431C96.833 52.7931 95.728 55.2601 95.899 57.7951C96.596 68.1001 92.806 78.1991 85.502 85.5031C78.199 92.8071 68.096 96.5931 57.777 95.8991C55.25 95.7261 52.792 96.8641 51.24 98.8821C49.688 100.9 49.259 103.592 50.078 106.002C53.404 115.775 52.347 126.504 47.18 135.44C42.011 144.375 33.239 150.642 23.054 152.643C20.547 153.131 18.451 154.845 17.477 157.205C16.503 159.566 16.778 162.259 18.212 164.373L18.251 164.43C23.998 172.998 25.765 183.629 23.1 193.597C20.435 203.564 13.597 211.895 4.32699 216.459L4.23299 216.506C1.95599 217.632 0.391991 219.822 0.0649911 222.342C-0.261009 224.862 0.690991 227.379 2.60599 229.05C10.39 235.845 14.856 245.668 14.856 256.001C14.856 266.334 10.391 276.158 2.60599 282.952C0.690991 284.623 -0.261009 287.139 0.0649911 289.66C0.390991 292.181 1.95599 294.37 4.23299 295.497L4.34099 295.551C13.597 300.108 20.433 308.438 23.098 318.405C25.763 328.372 23.996 339.004 18.249 347.575L18.189 347.663C16.773 349.777 16.541 352.466 17.517 354.817C18.491 357.168 20.613 358.882 23.111 359.373C33.239 361.363 42.012 367.63 47.18 376.565C52.349 385.5 53.405 396.23 50.084 405.988C49.232 408.4 49.665 411.079 51.212 413.116C52.758 415.153 55.235 416.28 57.794 416.103C68.115 415.406 78.199 419.197 85.502 426.5C92.806 433.803 96.595 443.902 95.899 454.215C95.721 456.756 96.859 459.205 98.878 460.759C100.896 462.314 103.592 462.743 106 461.922C115.775 458.596 126.501 459.653 135.436 464.821C144.371 469.99 150.639 478.762 152.642 488.957C153.131 491.453 154.836 493.541 157.184 494.517C159.536 495.494 162.217 495.231 164.33 493.817L164.428 493.752C172.997 488.005 183.629 486.237 193.596 488.903C203.563 491.568 211.894 498.405 216.458 507.675L216.505 507.769C217.631 510.047 219.821 511.611 222.342 511.938C224.86 512.264 227.378 511.312 229.05 509.398C235.845 501.614 245.668 497.149 256.001 497.149C266.334 497.149 276.158 501.614 282.953 509.398C284.408 511.064 286.501 512.002 288.68 512.002C289.011 512.002 289.343 511.981 289.675 511.937C292.199 511.603 294.39 510.029 295.511 507.742L295.55 507.662C300.107 498.405 308.438 491.568 318.405 488.904C328.369 486.241 339.003 488.007 347.589 493.764L347.678 493.824C349.793 495.234 352.478 495.456 354.825 494.482C357.17 493.506 358.881 491.386 359.371 488.892C361.361 478.764 367.629 469.991 376.563 464.823C385.499 459.656 396.229 458.599 406.033 461.936C408.445 462.77 411.109 462.324 413.135 460.775C415.16 459.227 416.274 456.752 416.103 454.207C415.406 443.902 419.196 433.803 426.5 426.5C433.804 419.196 443.895 415.403 454.206 416.103C456.743 416.281 459.2 415.148 460.758 413.129C462.314 411.111 462.745 408.415 461.923 406.002C458.599 396.23 459.655 385.501 464.822 376.566C469.991 367.631 478.763 361.363 488.948 359.362C491.452 358.875 493.545 357.165 494.521 354.808C495.497 352.452 495.227 349.762 493.801 347.647L493.752 347.574C488.004 339.005 486.237 328.373 488.903 318.405C491.568 308.438 498.406 300.108 507.676 295.544L507.77 295.497C510.047 294.371 511.612 292.181 511.938 289.66C512.265 287.138 511.312 284.622 509.398 282.951ZM474.213 314.474C471.278 325.449 472.114 336.99 476.429 347.309C466.093 351.552 457.345 359.116 451.658 368.948C445.974 378.775 443.779 390.128 445.264 401.23C434.184 402.662 423.778 407.712 415.747 415.743C407.72 423.769 402.672 434.165 401.238 445.254C390.152 443.77 378.789 445.964 368.95 451.655C359.132 457.334 351.574 466.065 347.32 476.428C337.002 472.112 325.457 471.274 314.477 474.21C303.494 477.146 293.906 483.637 287.116 492.535C278.272 485.721 267.354 481.94 256.003 481.94C256.002 481.94 256.003 481.94 256.002 481.94C244.652 481.94 233.731 485.721 224.888 492.535C218.101 483.642 208.512 477.149 197.527 474.212C186.55 471.277 175.003 472.115 164.692 476.426C160.448 466.091 152.885 457.344 143.053 451.658C133.228 445.975 121.881 443.78 110.772 445.266C109.34 434.184 104.29 423.779 96.26 415.746C88.233 407.719 77.838 402.671 66.749 401.237C68.231 390.154 66.039 378.788 60.348 368.95C54.668 359.131 45.935 351.573 35.576 347.319C39.891 337.003 40.729 325.456 37.794 314.475C34.856 303.489 28.36 293.898 19.471 287.114C26.285 278.27 30.065 267.351 30.065 256.001C30.065 244.65 26.284 233.73 19.47 224.887C28.363 218.1 34.856 208.51 37.793 197.526C40.727 186.554 39.891 175.017 35.575 164.693C45.91 160.45 54.66 152.886 60.347 143.053C66.031 133.225 68.226 121.873 66.741 110.77C77.823 109.338 88.226 104.289 96.259 96.2581C104.284 88.2321 109.333 77.8391 110.767 66.7471C121.845 68.2291 133.216 66.0371 143.054 60.3481C152.873 54.6691 160.431 45.9371 164.685 35.5751C175.002 39.8911 186.547 40.7291 197.529 37.7931C208.512 34.8571 218.101 28.3641 224.889 19.4681C233.734 26.2821 244.652 30.0631 256.004 30.0631C267.354 30.0631 278.275 26.2821 287.118 19.4681C293.904 28.3611 303.494 34.8541 314.478 37.7921C325.459 40.7271 337.002 39.8891 347.313 35.5781C351.557 45.9131 359.12 54.6611 368.952 60.3471C378.782 66.0331 390.135 68.2271 401.234 66.7411C402.666 77.8221 407.717 88.2261 415.747 96.2581C423.774 104.285 434.167 109.333 445.257 110.766C443.774 121.849 445.967 133.214 451.658 143.052C457.343 152.883 466.091 160.447 476.427 164.691C472.115 175.005 471.278 186.549 474.213 197.526C477.15 208.513 483.645 218.104 492.534 224.888C485.721 233.732 481.941 244.65 481.941 256.001C481.941 267.352 485.722 278.273 492.536 287.116C483.642 293.901 477.149 303.49 474.213 314.474Z"
        fill={color}
      />
      <path
        d="M449.601 283.669C448.297 281.985 446.347 280.924 444.223 280.747C431.476 279.677 421.49 268.808 421.49 256.002C421.49 243.196 431.475 232.324 444.223 231.255C446.346 231.078 448.297 230.017 449.601 228.333C450.905 226.649 451.442 224.494 451.083 222.396C436.972 139.921 372.079 75.0289 289.605 60.9179C287.505 60.5589 285.353 61.0959 283.668 62.3999C281.985 63.7039 280.925 65.6539 280.746 67.7759C279.675 80.5229 268.807 90.5089 256.001 90.5089C243.194 90.5089 232.324 80.5239 231.256 67.7769C231.078 65.6539 230.018 63.7039 228.334 62.3999C226.65 61.0959 224.497 60.5579 222.397 60.9179C139.922 75.0289 75.029 139.922 60.919 222.396C60.56 224.496 61.097 226.649 62.401 228.333C63.705 230.017 65.656 231.078 67.779 231.255C80.525 232.325 90.511 243.194 90.511 256C90.511 268.806 80.525 279.676 67.779 280.745C65.656 280.922 63.705 281.983 62.401 283.667C61.097 285.351 60.56 287.504 60.919 289.604C64.446 310.225 71.206 330.058 81.006 348.554C82.972 352.264 87.574 353.68 91.286 351.712C94.997 349.746 96.411 345.143 94.444 341.432C86.558 326.552 80.807 310.729 77.305 294.308C93.764 289.261 105.718 273.789 105.718 256C105.718 238.211 93.764 222.739 77.305 217.692C92.278 147.444 147.448 92.2729 217.694 77.3019C222.741 93.7609 238.212 105.716 256.002 105.716C273.791 105.716 289.263 93.7609 294.31 77.3019C364.555 92.2749 419.726 147.445 434.698 217.69C418.24 222.737 406.285 238.209 406.285 255.998C406.285 273.787 418.24 289.259 434.698 294.306C419.725 364.552 364.555 419.723 294.31 434.694C289.262 418.236 273.79 406.281 256.002 406.281C238.211 406.281 222.738 418.236 217.693 434.698C172.891 425.18 133.779 399.466 106.953 361.716C104.523 358.293 99.775 357.489 96.35 359.921C92.927 362.353 92.124 367.101 94.556 370.524C109.503 391.561 128.115 409.246 149.871 423.093C172.088 437.231 196.488 446.648 222.396 451.081C224.496 451.442 226.649 450.903 228.333 449.599C230.017 448.295 231.077 446.344 231.255 444.222C232.325 431.475 243.193 421.49 256 421.49C268.806 421.49 279.676 431.476 280.745 444.223C280.923 446.345 281.984 448.296 283.668 449.6C285.009 450.639 286.649 451.192 288.323 451.192C288.75 451.192 289.179 451.156 289.606 451.084C372.08 436.974 436.973 372.081 451.084 289.606C451.442 287.507 450.905 285.353 449.601 283.669Z"
        fill={color}
      />
      <path
        d="M256.001 221.952C237.226 221.952 221.954 237.225 221.954 255.999C221.954 274.774 237.227 290.046 256.001 290.046C274.775 290.046 290.048 274.772 290.048 255.999C290.048 237.226 274.775 221.952 256.001 221.952ZM256.001 274.839C245.613 274.839 237.161 266.388 237.161 255.999C237.161 245.61 245.613 237.159 256.001 237.159C266.389 237.159 274.84 245.61 274.84 255.999C274.84 266.388 266.389 274.839 256.001 274.839Z"
        fill={color}
      />
      <path
        d="M355.986 165.175C353.163 162.069 348.355 161.838 345.244 164.662C342.137 167.487 341.907 172.295 344.732 175.404C364.812 197.496 375.87 226.119 375.87 256C375.87 322.097 322.097 375.87 256.001 375.87C189.904 375.87 136.131 322.097 136.131 256C136.131 189.903 189.904 136.13 256.001 136.13C280.022 136.13 303.196 143.208 323.016 156.598C326.497 158.949 331.222 158.034 333.573 154.554C335.923 151.073 335.009 146.347 331.528 143.996C309.186 128.901 283.068 120.923 256 120.923C181.518 120.923 120.922 181.518 120.922 256.001C120.922 330.484 181.517 391.079 256 391.079C330.483 391.079 391.078 330.482 391.078 256C391.078 222.328 378.616 190.072 355.986 165.175Z"
        fill={color}
      />
      <path
        d="M346.187 248.395C341.989 248.395 338.593 251.802 338.593 255.999C338.583 255.999 338.583 255.999 338.583 255.999C338.583 256.029 338.583 256.07 338.583 256.1C338.583 256.12 338.583 256.151 338.583 256.171C338.583 256.181 338.583 256.181 338.583 256.181C338.572 260.378 341.979 263.785 346.176 263.795H346.187C350.384 263.795 353.78 260.399 353.791 256.211C353.791 256.17 353.791 256.13 353.791 256.099C353.791 256.069 353.791 256.028 353.791 255.998C353.791 251.801 350.394 248.395 346.187 248.395Z"
        fill={color}
      />
      <path
        d="M302.885 333.437C301.008 329.676 296.446 328.145 292.684 330.01C288.922 331.875 287.392 336.448 289.257 340.209C290.585 342.875 293.282 344.427 296.07 344.427C297.216 344.427 298.362 344.174 299.456 343.636H299.446C303.21 341.761 304.751 337.199 302.885 333.437Z"
        fill={color}
      />
      <path
        d="M327.673 311.274C324.582 308.435 319.766 308.648 316.937 311.751C314.098 314.843 314.311 319.659 317.403 322.488C318.863 323.826 320.708 324.485 322.543 324.485C324.601 324.485 326.649 323.654 328.15 322.011C330.99 318.919 330.777 314.113 327.673 311.274Z"
        fill={color}
      />
      <path
        d="M342.821 281.67C338.907 280.149 334.497 282.076 332.976 285.989C331.445 289.903 333.381 294.313 337.295 295.844C338.207 296.199 339.14 296.361 340.053 296.361C343.095 296.361 345.975 294.526 347.14 291.515C348.67 287.611 346.735 283.201 342.821 281.67Z"
        fill={color}
      />
      <path
        d="M347.211 220.666C345.7 216.753 341.29 214.806 337.377 216.327C333.464 217.848 331.517 222.248 333.038 226.161C334.204 229.172 337.083 231.017 340.135 231.017C341.047 231.027 341.971 230.855 342.872 230.51C346.785 228.989 348.732 224.589 347.211 220.666Z"
        fill={color}
      />
      <path
        d="M328.283 190.128C325.454 187.026 320.638 186.803 317.535 189.631C314.433 192.46 314.211 197.265 317.039 200.368C318.539 202.021 320.598 202.852 322.666 202.852C324.491 202.852 326.325 202.193 327.786 200.865C330.887 198.036 331.111 193.23 328.283 190.128Z"
        fill={color}
      />
      <path
        d="M206.142 321.849C202.796 319.304 198.031 319.963 195.486 323.309C192.951 326.655 193.61 331.43 196.956 333.965C198.325 335.009 199.937 335.506 201.54 335.506C203.842 335.506 206.113 334.472 207.612 332.495C210.146 329.149 209.488 324.384 206.142 321.849Z"
        fill={color}
      />
      <path
        d="M168.741 231.859C164.615 231.088 160.64 233.816 159.87 237.942C159.099 242.068 161.817 246.043 165.953 246.813C166.419 246.894 166.896 246.945 167.352 246.945C170.941 246.945 174.135 244.39 174.824 240.73C175.585 236.603 172.868 232.629 168.741 231.859Z"
        fill={color}
      />
      <path
        d="M271.751 345.147C271.375 340.96 267.683 337.878 263.497 338.253C259.31 338.628 256.228 342.319 256.603 346.506C256.958 350.46 260.273 353.431 264.166 353.431C264.399 353.431 264.632 353.421 264.855 353.401C269.043 353.025 272.125 349.325 271.751 345.147Z"
        fill={color}
      />
      <path
        d="M183.361 201.99C179.792 199.78 175.108 200.865 172.888 204.433C170.669 208.002 171.764 212.686 175.331 214.906C176.578 215.687 177.968 216.052 179.336 216.052C181.881 216.052 184.365 214.785 185.804 212.463C188.025 208.895 186.93 204.211 183.361 201.99Z"
        fill={color}
      />
      <path
        d="M185.713 299.392C183.503 295.813 178.819 294.708 175.25 296.918C171.671 299.128 170.566 303.812 172.777 307.391C174.216 309.713 176.71 310.99 179.255 310.99C180.624 310.99 182.003 310.625 183.25 309.855C186.818 307.645 187.923 302.961 185.713 299.392Z"
        fill={color}
      />
      <path
        d="M207.765 179.401C205.24 176.045 200.465 175.386 197.119 177.911C193.762 180.446 193.094 185.211 195.629 188.567C197.129 190.544 199.401 191.588 201.701 191.588C203.303 191.588 204.905 191.081 206.285 190.047C209.63 187.522 210.299 182.747 207.765 179.401Z"
        fill={color}
      />
      <path
        d="M174.794 271.095C174.784 271.095 174.784 271.095 174.784 271.095C174.024 266.969 170.059 264.231 165.934 264.992C161.807 265.762 159.069 269.727 159.83 273.853C160.509 277.513 163.713 280.078 167.302 280.078C167.758 280.078 168.225 280.037 168.691 279.956C172.817 279.186 175.554 275.221 174.794 271.095Z"
        fill={color}
      />
      <path
        d="M233.275 335.425C229.239 334.269 225.02 336.611 223.875 340.646C222.719 344.681 225.061 348.889 229.096 350.044C229.795 350.247 230.495 350.338 231.185 350.338C234.501 350.338 237.543 348.158 238.495 344.823C239.652 340.778 237.309 336.57 233.275 335.425Z"
        fill={color}
      />
      <path
        d="M299.631 168.452C295.869 166.576 291.306 168.107 289.43 171.859C287.554 175.62 289.085 180.183 292.837 182.058C293.921 182.605 295.088 182.859 296.223 182.859C299.021 182.859 301.708 181.318 303.036 178.651C304.913 174.9 303.392 170.327 299.631 168.452Z"
        fill={color}
      />
      <path
        d="M238.677 167.144C237.542 163.099 233.333 160.757 229.288 161.902C225.254 163.048 222.911 167.245 224.046 171.29C225 174.636 228.052 176.816 231.356 176.816C232.046 176.816 232.745 176.725 233.435 176.532C237.48 175.386 239.823 171.179 238.677 167.144Z"
        fill={color}
      />
      <path
        d="M265.058 158.617C260.881 158.232 257.18 161.314 256.796 165.491C256.41 169.678 259.482 173.379 263.669 173.764C263.902 173.784 264.134 173.794 264.369 173.794C268.262 173.794 271.577 170.834 271.932 166.89C272.317 162.703 269.245 159.003 265.058 158.617Z"
        fill={color}
      />
    </svg>

  )
}
