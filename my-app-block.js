(async function () {
  function getCountryList() {
    return {
      af: "Afghanistan",
      ax: "Åland Islands",
      al: "Albania",
      dz: "Algeria",
      as: "American Samoa",
      ad: "Andorra",
      ao: "Angola",
      ai: "Anguilla",
      aq: "Antarctica",
      ag: "Antigua and Barbuda",
      ar: "Argentina",
      am: "Armenia",
      aw: "Aruba",
      au: "Australia",
      at: "Austria",
      az: "Azerbaijan",
      bs: "Bahamas",
      bh: "Bahrain",
      bd: "Bangladesh",
      bb: "Barbados",
      by: "Belarus",
      be: "Belgium",
      bz: "Belize",
      bj: "Benin",
      bm: "Bermuda",
      bt: "Bhutan",
      bo: "Bolivia (Plurinational State of)",
      bq: "Bonaire, Sint Eustatius and Sab",
      ba: "Bosnia and Herzegovina",
      bw: "Botswana",
      bv: "Bouvet Island",
      br: "Brazil",
      io: "British Indian Ocean Territory",
      bn: "Brunei Darussalam",
      bg: "Bulgaria",
      bf: "Burkina Faso",
      bi: "Burundi",
      kh: "Cambodia",
      cm: "Cameroon",
      ca: "Canada",
      cv: "Cape Verde",
      ky: "Cayman Islands",
      cf: "Central African Republic",
      td: "Chad",
      cl: "Chile",
      cn: "China",
      cx: "Christmas Island",
      cc: "Cocos (Keeling) Islands",
      co: "Colombia",
      km: "Comoros",
      cg: "Congo",
      cd: "Congo (Democratic Republic of the)",
      ck: "Cook Islands",
      cr: "Costa Rica",
      hr: "Croatia",
      cu: "Cuba",
      cw: "Curaçao",
      cy: "Cyprus",
      cz: "Czech Republic",
      ci: "Côte d'Ivoire",
      dk: "Denmark",
      dj: "Djibouti",
      dm: "Dominica",
      do: "Dominican Republic",
      ec: "Ecuador",
      eg: "Egypt",
      sv: "El Salvador",
      gq: "Equatorial Guinea",
      er: "Eritrea",
      ee: "Estonia",
      et: "Ethiopia",
      fk: "Falkland Islands (Malvinas)",
      fo: "Faroe Islands",
      fj: "Fiji",
      fi: "Finland",
      fr: "France",
      gf: "French Guiana",
      tf: "French Southern Territories",
      pf: "French polynesia",
      ga: "Gabon",
      gm: "Gambia",
      ge: "Georgia",
      de: "Germany",
      gh: "Ghana",
      gi: "Gibraltar",
      gr: "Greece",
      gl: "Greenland",
      gd: "Grenada",
      gp: "Guadeloupe",
      gu: "Guam",
      gt: "Guatemala",
      gg: "Guernsey",
      gn: "Guinea",
      gw: "Guinea-Bissau",
      gy: "Guyana",
      ht: "Haiti",
      hm: "Heard Island and McDonald Islands",
      va: "Holy See",
      hn: "Honduras",
      hk: "Hong Kong",
      hu: "Hungary",
      is: "Iceland",
      in: "India",
      id: "Indonesia",
      ir: "Iran (Islamic Republic of",
      iq: "Iraq",
      ie: "Ireland",
      im: "Isle of Man",
      il: "Israel",
      it: "Italy",
      jm: "Jamaica",
      jp: "Japan",
      je: "Jersey",
      jo: "Jordan",
      kz: "Kazakhstan",
      ke: "Kenya",
      ki: "Kiribati",
      kp: "Korea (Democratic People's Republic of)",
      kr: "Korea (Republic of)",
      kw: "Kuwait",
      kg: "Kyrgyzstan",
      la: "Lao People's Democratic Republic",
      lv: "Latvia",
      lb: "Lebanon",
      ls: "Lesotho",
      lr: "Liberia",
      ly: "Libya",
      li: "Liechtenstein",
      lt: "Lithuania",
      lu: "Luxembourg",
      mo: "Macao",
      mk: "Macedonia (the former Yugoslav Republic of)",
      mg: "Madagascar",
      mw: "Malawi",
      my: "Malaysia",
      mv: "Maldives",
      ml: "Mali",
      mt: "Malta",
      mh: "Marshall islands",
      mq: "Martinique",
      mr: "Mauritania",
      mu: "Mauritius",
      yt: "Mayotte",
      mx: "Mexico",
      fm: "Micronesia (Federated States of)",
      md: "Moldova (Republic of)",
      mc: "Monaco",
      mn: "Mongolia",
      me: "Montenegro",
      ms: "Montserrat",
      ma: "Morocco",
      mz: "Mozambique",
      mm: "Myanmar",
      na: "Namibia",
      nr: "Nauru",
      np: "Nepal",
      nl: "Netherlands",
      nc: "New Caledonia",
      nz: "New Zealand",
      ni: "Nicaragua",
      ne: "Niger",
      ng: "Nigeria",
      nu: "Niue",
      nf: "Norfolk Island",
      mp: "Northern Mariana Islands",
      no: "Norway",
      om: "Oman",
      pk: "Pakistan",
      pw: "Palau",
      ps: "Palestine, State of",
      pa: "Panama",
      pg: "Papua New Guinea",
      py: "Paraguay",
      pe: "Peru",
      ph: "Philippines",
      pn: "Pitcairn",
      pl: "Poland",
      pt: "Portugal",
      pr: "Puerto Rico",
      qa: "Qatar",
      xk: "Republic of Kosovo",
      ro: "Romania",
      ru: "Russian Federation",
      rw: "Rwanda",
      re: "Réunion",
      bl: "Saint Barthélemy",
      sh: "Saint Helena, Ascension and Tristan da Cunha",
      kn: "Saint Kitts and Nevis",
      lc: "Saint Lucia",
      mf: "Saint Martin (French part)",
      pm: "Saint Pierre and Miquelon",
      vc: "Saint Vincent and the Grenadines",
      ws: "Samoa",
      sm: "San Marino",
      st: "Sao Tome and Principe",
      sa: "Saudi Arabia",
      sn: "Senegal",
      rs: "Serbia",
      sc: "Seychelles",
      sl: "Sierra Leone",
      sg: "Singapore",
      sx: "Sint Maarten (Dutch part)",
      sk: "Slovakia",
      si: "Slovenia",
      sb: "Solomon Islands",
      so: "Somalia",
      za: "South Africa",
      gs: "South Georgia and the South Sandwich Islands",
      ss: "South Sudan",
      es: "Spain",
      lk: "Sri Lanka",
      sd: "Sudan",
      sr: "Suriname",
      sj: "Svalbard and Jan Mayen",
      sz: "Swaziland",
      se: "Sweden",
      ch: "Switzerland",
      sy: "Syrian Arab Republic",
      tw: "Taiwan",
      tj: "Tajikistan",
      tz: "Tanzania",
      th: "Thailand",
      tl: "Timor-Leste",
      tg: "Togo",
      tk: "Tokelau",
      to: "Tonga",
      tt: "Trinidad and Tobago",
      tn: "Tunisia",
      tr: "Turkey",
      tm: "Turkmenistan",
      tc: "Turks and Caicos Islands",
      tv: "Tuvalu",
      ug: "Uganda",
      ua: "Ukraine",
      ae: "United Arab Emirates",
      gb: "United Kingdom of Great Britain and Northern Ireland",
      um: "United States Minor Outlying Islands",
      us: "United States",
      uy: "Uruguay",
      uz: "Uzbekistan",
      vu: "Vanuatu",
      ve: "Venezuela (Bolivarian Republic of)",
      vn: "Viet",
      vg: "Virgin Islands (British)",
      vi: "Virgin Islands (U.S.)",
      wf: "Wallis and Futuna",
      eh: "Western Sahara",
      ye: "Yemen",
      zm: "Zambia",
      zw: "Zimbabwe",
    };
  }

  // ------------------------------ DOM HELPER FUNCTIONS ------------------------------
  async function createElem({
    tag,
    appendTo,
    children = [],
    attributes = {},
    events = {},
  }) {
    const element = document.createElement(tag);

    Object.entries(attributes).forEach(([key, value]) => {
      if (key === "style" && typeof value === "object") {
        Object.entries(value).forEach(([styleKey, styleValue]) => {
          element.style[styleKey] = styleValue;
        });
      } else if (key in element) {
        element[key] = value;
      } else {
        element.setAttribute(key, value);
      }
    });

    Object.entries(events).forEach(([event, handler]) => {
      element.addEventListener(event, handler);
    });

    const fragment = document.createDocumentFragment();
    children.forEach((child) => fragment.appendChild(child));

    element.appendChild(fragment);

    if (appendTo) {
      appendTo.appendChild(element);
    }

    return element;
  }

  async function insertStryleTag(cssUrl) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = cssUrl;
    document.head.appendChild(link);
  }

  // ------------------------------ DATE AND TIME HELPER FUNCTIONS ------------------------------
  function formatDateInISO(givenDate) {
    const inputDate = new Date(givenDate);
    const year = inputDate.getFullYear();
    const month = String(inputDate.getMonth() + 1).padStart(2, "0");
    const day = String(inputDate.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

  function toDateFormat(currDate, dateFormat, variableTranslate) {
    const shortMonths = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const longMonths = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const longDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const format =
      dateFormat.format !== "custom"
        ? dateFormat.format
        : dateFormat.custom_format;
    const zero_pad = dateFormat.zero_pad;

    const originalDate = new Date(currDate);
    const date = zero_pad
      ? String(originalDate.getDate()).padStart(2, "0")
      : String(originalDate.getDate());
    const date_advanced =
      originalDate.getDate() +
      (originalDate.getDate() % 10 === 1 && originalDate.getDate() !== 11
        ? "st"
        : originalDate.getDate() % 10 === 2 && originalDate.getDate() !== 12
          ? "nd"
          : originalDate.getDate() % 10 === 3 && originalDate.getDate() !== 13
            ? "rd"
            : "th");
    const month = zero_pad
      ? String(originalDate.getMonth() + 1).padStart(2, "0")
      : String(originalDate.getMonth() + 1);
    const month_short = shortMonths[originalDate.getMonth()];
    const month_full = longMonths[originalDate.getMonth()];
    const month_label = variableTranslate.months[originalDate.getMonth()];
    const weekday_short = shortDays[originalDate.getDay()];
    const weekday_full = longDays[originalDate.getDay()];
    const weekday_label = variableTranslate.weekdays[originalDate.getDay()];
    const year = originalDate.getFullYear();

    return format
      .replace(/{year}/g, String(year))
      .replace(/{date}/g, date)
      .replace(/{date_advanced}/g, String(date_advanced))
      .replace(/{month}/g, month)
      .replace(/{month_short}/g, month_short)
      .replace(/{month_full}/g, month_full)
      .replace(/{month_label}/g, month_label)
      .replace(/{weekday_short}/g, weekday_short)
      .replace(/{weekday_full}/g, weekday_full)
      .replace(/{weekday_label}/g, weekday_label);
  }

  function toTimeFormat(totalSeconds, formatType, variableTranslate) {
    const format =
      formatType.format !== "custom"
        ? formatType.format
        : formatType.custom_format;
    const zero_pad = formatType.zero_pad;

    const hours = zero_pad
      ? String(Math.floor(totalSeconds / 3600)).padStart(2, "0")
      : String(Math.floor(totalSeconds / 3600));
    const minutes = zero_pad
      ? String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0")
      : String(Math.floor((totalSeconds % 3600) / 60));
    const seconds = zero_pad
      ? String(totalSeconds % 60).padStart(2, "0")
      : String(totalSeconds % 60);

    const labels = {
      hours:
        formatType.format === "custom"
          ? variableTranslate.time_units.hours
          : "Hours",
      minutes:
        formatType.format === "custom"
          ? variableTranslate.time_units.minutes
          : "Minutes",
      seconds:
        formatType.format === "custom"
          ? variableTranslate.time_units.seconds
          : "Seconds",
    };

    return format
      .replace(/{hours}/g, hours)
      .replace(/{minutes}/g, minutes)
      .replace(/{seconds}/g, seconds)
      .replace(/{hours_label}/g, labels.hours)
      .replace(/{minutes_label}/g, labels.minutes)
      .replace(/{seconds_label}/g, labels.seconds);
  }

  function convertToTimezone(date, timezone) {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    // Format the date
    const formattedDate = formatter.formatToParts(date).reduce((acc, part) => {
      if (part.type !== "literal") acc[part.type] = part.value;
      return acc;
    }, {});

    return `${formattedDate.year}-${formattedDate.month}-${formattedDate.day} ${formattedDate.hour}:${formattedDate.minute}:${formattedDate.second}:00`;
  }

  function addDaysToDate(originalDate, daysToAdd) {
    const newDate = new Date(originalDate);
    newDate.setDate(newDate.getDate() + daysToAdd);
    return newDate;
  }

  // ------------------------------ CALCULATION HELPER FUNCTIONS ------------------------------
  function isWorkdayAndNotHoliday(date, workWeek, holidays) {
    const dayOfWeek = date.getDay();
    const formattedDate = formatDateInISO(date);
    const ISOHolidays = holidays.map((holiday) => formatDateInISO(holiday));

    return workWeek[dayOfWeek] === true && !ISOHolidays.includes(formattedDate);
  }

  async function calculateTokenValues(configData) {
    function datesCalculation(configData, workingWeek, dayRange, calcMethod) {
      let today = new Date();

      if (configData?.timezone_setting?.mode === "custom") {
        today = new Date(
          convertToTimezone(today, configData?.timezone_setting?.timezone)
        );
      }

      const holidays = configData?.holidays;
      const cutoffTime = configData?.countdown_setting?.cutoff_time;
      const cutoffTimeAdvancedEnabled =
        configData?.countdown_setting?.advanced_enable;
      const cutoffTimeAdvanced = configData?.countdown_setting?.advanced_time;
      let iterationDate = new Date(today);

      let minDaysToAddInMinDate = dayRange?.min;
      let minDaysToAddInMaxDate = dayRange?.max - dayRange?.min;

      let holidaysToAddInMinDate = 0;
      let holidaysToAddInMaxDate = 0;

      // If order is after cutoff time, move to next day
      if (cutoffTimeAdvancedEnabled) {
        if (
          iterationDate.getHours() >
            cutoffTimeAdvanced[iterationDate.getDay()]?.hours ||
          (iterationDate.getHours() ===
            cutoffTimeAdvanced[iterationDate.getDay()]?.hours &&
            iterationDate.getMinutes() >=
              cutoffTimeAdvanced[iterationDate.getDay()]?.minutes)
        ) {
          iterationDate = addDaysToDate(iterationDate, 1);
          holidaysToAddInMinDate++;
        }
      } else {
        if (
          iterationDate.getHours() > cutoffTime?.hours ||
          (iterationDate.getHours() === cutoffTime?.hours &&
            iterationDate.getMinutes() >= cutoffTime?.minutes)
        ) {
          iterationDate = addDaysToDate(iterationDate, 1);
          holidaysToAddInMinDate++;
        }
      }

      // Calculate dates (min and max)
      if (calcMethod !== "none") {
        // Calculate min date
        while (minDaysToAddInMinDate > 0) {
          if (isWorkdayAndNotHoliday(iterationDate, workingWeek, holidays)) {
            minDaysToAddInMinDate--;
          } else {
            holidaysToAddInMinDate++;
          }
          iterationDate = addDaysToDate(iterationDate, 1);
        }

        // Calculate max date (if minmax calculation is enabled)
        if (calcMethod === "minmax") {
          while (minDaysToAddInMaxDate > 0) {
            if (isWorkdayAndNotHoliday(iterationDate, workingWeek, holidays)) {
              minDaysToAddInMaxDate--;
            } else {
              holidaysToAddInMaxDate++;
            }
            iterationDate = addDaysToDate(iterationDate, 1);
          }
        }
      }

      // Calculate the final dates
      const minimum_date = addDaysToDate(
        today,
        dayRange?.min - 1 + holidaysToAddInMinDate
      );
      const maximum_date = addDaysToDate(
        minimum_date,
        dayRange?.max - dayRange?.min + holidaysToAddInMaxDate
      );

      return { minimum_date, maximum_date };
    }

    const deliveryWorkingWeek = configData?.order_delivery_setting?.work_week;
    const deliveryDayRange = configData?.order_delivery_setting?.day_range;
    const deliveryCalcMethod =
      configData?.order_delivery_setting?.calculation_method;

    const {
      minimum_date: order_delivery_minimum_date,
      maximum_date: order_delivery_maximum_date,
    } = datesCalculation(
      configData,
      deliveryWorkingWeek,
      deliveryDayRange,
      deliveryCalcMethod
    );

    const readyWorkingWeek = configData?.order_ready_setting?.work_week;
    const readyDayRange = configData?.order_ready_setting?.day_range;
    const readyCalcMethod = configData?.order_ready_setting?.calculation_method;

    const {
      minimum_date: order_ready_minimum_date,
      maximum_date: order_ready_maximum_date,
    } = datesCalculation(
      configData,
      readyWorkingWeek,
      readyDayRange,
      readyCalcMethod
    );

    return {
      today_date: new Date(),
      order_delivery_minimum_date,
      order_delivery_maximum_date,
      order_ready_minimum_date,
      order_ready_maximum_date,
    };
  }

  async function calculateTimeUntilNextCutoff(configData) {
    let today = new Date();
    if (configData?.timezone_setting?.mode === "custom") {
      today = new Date(
        convertToTimezone(today, configData?.timezone_setting?.timezone)
      );
    }

    const holidays = configData?.holidays;
    const cutoffTime = configData?.countdown_setting?.cutoff_time;
    const cutoffTimeAdvancedEnabled =
      configData?.countdown_setting?.advanced_enable;
    const cutoffTimeAdvanced = configData?.countdown_setting?.advanced_time;

    const workingWeek = configData?.order_ready_setting?.work_week;

    let iterationDate = new Date(today);

    // If order is after cutoff time, move to next day
    if (cutoffTimeAdvancedEnabled) {
      if (
        iterationDate.getHours() >
          cutoffTimeAdvanced[iterationDate.getDay()]?.hours ||
        (iterationDate.getHours() ===
          cutoffTimeAdvanced[iterationDate.getDay()]?.hours &&
          iterationDate.getMinutes() >=
            cutoffTimeAdvanced[iterationDate.getDay()]?.minutes)
      ) {
        iterationDate = addDaysToDate(iterationDate, 1);
      }
    } else {
      if (
        iterationDate.getHours() > cutoffTime?.hours ||
        (iterationDate.getHours() === cutoffTime?.hours &&
          iterationDate.getMinutes() >= cutoffTime?.minutes)
      ) {
        iterationDate = addDaysToDate(iterationDate, 1);
      }
    }

    while (!isWorkdayAndNotHoliday(iterationDate, workingWeek, holidays)) {
      iterationDate = addDaysToDate(iterationDate, 1);
    }

    let cutoffHours, cutoffMinutes;

    if (cutoffTimeAdvancedEnabled) {
      cutoffHours = cutoffTimeAdvanced[iterationDate.getDay()]?.hours;
      cutoffMinutes = cutoffTimeAdvanced[iterationDate.getDay()]?.minutes;
    } else {
      cutoffHours = cutoffTime?.hours;
      cutoffMinutes = cutoffTime?.minutes;
    }

    let cutoffDate = new Date(iterationDate);
    cutoffDate.setHours(cutoffHours, cutoffMinutes, 0, 0);

    return Math.floor((cutoffDate - today) / 1000);
  }

  // ------------------------------ Token Functions ------------------------------
  async function getTokensValue(config, userLocationData) {
    const tokenValues = await calculateTokenValues(config);

    const countDownTime = await calculateTimeUntilNextCutoff(config);

    const formattedTokenValues = {
      advanced_country_flag: `icon-${userLocationData.country_code}_f`,
      advanced_country_name: userLocationData.country_name,
      country_flag: `icon-${userLocationData.country_code}_f`,
      country_name: userLocationData.country_name,
      countdown_time: toTimeFormat(
        countDownTime,
        config.time_format,
        config.variable_language_translate
      ),
      today_date: toDateFormat(
        tokenValues.today_date,
        config.date_format,
        config.variable_language_translate
      ),
      order_delivery_minimum_date: toDateFormat(
        tokenValues.order_delivery_minimum_date,
        config.date_format,
        config.variable_language_translate
      ),
      order_delivery_maximum_date: toDateFormat(
        tokenValues.order_delivery_maximum_date,
        config.date_format,
        config.variable_language_translate
      ),
      order_ready_minimum_date: toDateFormat(
        tokenValues.order_ready_minimum_date,
        config.date_format,
        config.variable_language_translate
      ),
      order_ready_maximum_date: toDateFormat(
        tokenValues.order_ready_maximum_date,
        config.date_format,
        config.variable_language_translate
      ),
    };

    return formattedTokenValues;
  }

  function replaceTokenPlaceholders(text, values) {
    return text?.replace(/{(\w+)}/g, (_, key) => values[key] || `{${key}}`);
  }

  // ------------------------------ SVG ICONS ------------------------------
  function getSVGIconPath(iconName) {
    const SVG_ICONS = {
      address_0: {
        name: "address",
        svg_path:
          '<path d="M497.117867 0C279.074133 0 102.4 177.152 102.4 395.605333 102.4 697.344 421.888 1024 498.346667 1024c76.526933 0 393.4208-326.724267 393.4208-628.394667C891.767467 177.152 714.9568 0 497.117867 0zm0 578.9696a181.6576 181.6576 0 0 1-181.521067-181.8624 181.6576 181.6576 0 0 1 181.521067-181.930667A181.6576 181.6576 0 0 1 678.570667 397.1072 181.6576 181.6576 0 0 1 497.117867 578.901333z"></path>',
      },
      address_1: {
        name: "address",
        svg_path:
          '<path d="M665.6 322.56c0-87.04-66.56-153.6-153.6-153.6s-153.6 66.56-153.6 153.6 66.56 153.6 153.6 153.6 153.6-66.56 153.6-153.6z m-204.8 0c0-30.72 20.48-51.2 51.2-51.2s51.2 20.48 51.2 51.2-20.48 51.2-51.2 51.2-51.2-20.48-51.2-51.2zM972.8 614.4h-250.88c56.32-97.28 107.52-204.8 107.52-296.96C829.44 143.36 686.08 0 512 0 337.92 0 194.56 143.36 194.56 317.44c0 92.16 46.08 204.8 102.4 296.96H51.2c-30.72 0-51.2 20.48-51.2 51.2v307.2c0 30.72 20.48 51.2 51.2 51.2h921.6c30.72 0 51.2-20.48 51.2-51.2v-307.2c0-30.72-20.48-51.2-51.2-51.2zM512 102.4c117.76 0 215.04 97.28 215.04 215.04 0 122.88-133.12 317.44-215.04 424.96-81.92-102.4-215.04-291.84-215.04-424.96C296.96 199.68 394.24 102.4 512 102.4z m409.6 819.2H102.4v-204.8h266.24c56.32 76.8 102.4 133.12 107.52 138.24 5.12 10.24 20.48 15.36 35.84 15.36 15.36 0 30.72-5.12 40.96-15.36 5.12-5.12 51.2-61.44 102.4-138.24H921.6v204.8z"></path>',
      },
      address_2: {
        name: "address",
        svg_path:
          '<path d="M512 62c-205.19 0-371.53 166.34-371.53 371.53S376.41 962 512 962c139.66 0 371.53-323.28 371.53-528.47S717.19 62 512 62z m158.32 558.87c-42.55 36.41-97.77 58.08-158.32 58.08s-115.77-21.67-158.32-58.08c-53.18-45.01-87.14-112.09-87.14-187.37 0-135.41 110.05-245.45 245.46-245.45S757.45 298.09 757.45 433.5c0 75.28-33.95 142.36-87.13 187.37z"></path><path d="M613.11 350.44L488.86 474.69l-58.04-58.05c-11.98-11.98-31.41-11.98-43.39 0-11.98 11.99-11.98 31.41 0 43.39l79.74 79.74c5.99 6 13.84 8.99 21.69 8.99 7.85 0 15.71-3 21.7-8.99L656.5 393.83c11.98-11.98 11.98-31.41 0-43.39s-31.41-11.98-43.39 0z"></path>',
      },
      address_3: {
        name: "address",
        svg_path:
          '<path d="M337.96 653.33c-0.04 0.02-0.09 0.04-0.14 0.05 25.16 25.16 50.76 47.67 74.6 66.65 4.07 3.28 8.11 6.48 12.06 9.58 1.59 1.26 3.17 2.5 4.74 3.7 0.39 0.3 0.77 0.6 1.16 0.9 0.47 0.36 0.93 0.72 1.39 1.08 0.55 0.43 1.12 0.86 1.67 1.29 2.76 2.13 5.5 4.23 8.16 6.25 0.62 0.46 1.24 0.93 1.85 1.38 0.14 0.1 0.28 0.21 0.42 0.31 9.28 7.01 17.98 13.29 25.93 18.99a73.78 73.78 0 0 0 29.35 12.11c0.14 0.02 0.28 0.06 0.42 0.08 0.01 0 0.02 0.01 0.03 0 0.16 0.03 0.31 0.05 0.47 0.07 0.48 0.08 0.97 0.16 1.45 0.22 0.39 0.06 0.78 0.1 1.17 0.15 1.48 0.19 2.96 0.33 4.44 0.43 0.28 0.02 0.56 0.03 0.84 0.05 0.91 0.05 1.81 0.08 2.72 0.1 0.28 0.01 0.57 0.01 0.85 0.02 1.11 0.01 2.22-0.01 3.32-0.05 0.3-0.01 0.61-0.04 0.91-0.05 0.8-0.04 1.6-0.09 2.4-0.16 0.22-0.02 0.45-0.02 0.67-0.05 0.4-0.04 0.81-0.08 1.21-0.13l0.31-0.03 0.82-0.09c0.21-0.03 0.43-0.06 0.64-0.08 1.29-0.17 2.59-0.38 3.87-0.63 0.73-0.14 1.45-0.3 2.17-0.46l0.57-0.12c0.39-0.09 0.78-0.2 1.18-0.29 0.59-0.14 1.17-0.29 1.76-0.45l0.11-0.03c0.72-0.19 1.44-0.4 2.16-0.62 0.09-0.03 0.17-0.06 0.25-0.09 0.27-0.08 0.54-0.18 0.81-0.27 0.58-0.18 1.16-0.37 1.73-0.57 3.55-1.25 7.02-2.78 10.39-4.59 0.07-0.04 0.13-0.08 0.2-0.12 1.14-0.62 2.26-1.27 3.38-1.95 0.08-0.05 0.17-0.1 0.25-0.15 1.16-0.72 2.31-1.45 3.44-2.24 0.42-0.3 0.86-0.62 1.29-0.92 0.66-0.47 1.32-0.94 1.98-1.42 0.01-0.01 0.03-0.02 0.05-0.03 7.7-5.47 16.09-11.65 24.97-18.31 9.2-6.97 19.03-14.58 29.17-22.83 0.72-0.58 1.44-1.16 2.16-1.75 0.41-0.32 0.82-0.66 1.22-0.99A868.372 868.372 0 0 0 672 667.03c21.05-20.12 42.07-42.19 61.64-65.93 53.27-64.69 95.45-141.12 95.45-221.98C829.11 204.07 687.05 62 512 62c-175.04 0-317.11 142.07-317.11 317.11 0 80.86 42.18 157.29 95.45 221.98 15.22 18.45 31.31 35.92 47.62 52.24zM512 283.98c52.54 0 95.13 42.59 95.13 95.13s-42.59 95.13-95.13 95.13-95.13-42.59-95.13-95.13 42.59-95.13 95.13-95.13zM214.05 893.06a297.95 68.94 0 1 0 595.9 0 297.95 68.94 0 1 0-595.9 0Z" p-id="640"></path>',
      },
      address_4: {
        name: "address",
        svg_path:
          '<path d="M500.8 310.4a88.96 88.96 0 1 0 88.96 88.96 88.96 88.96 0 0 0-88.96-88.96zM778.56 199.36A352 352 0 1 0 224 631.68l240 309.12a49.28 49.28 0 0 0 38.08 18.56 48.32 48.32 0 0 0 37.76-18.56l240-308.8a352 352 0 0 0-1.28-432.64z m-277.76 360a160 160 0 1 1 160-160 160 160 0 0 1-160 160z" p-id="610"></path>',
      },
      address_5: {
        name: "address",
        svg_path:
          '<path d="M438.857143 536.380952v73.142858H207.238095a36.571429 36.571429 0 0 0 0 73.142857h609.52381a109.714286 109.714286 0 1 1 0 219.428571h-585.142857v-73.142857h585.142857a36.571429 36.571429 0 0 0 0-73.142857h-609.52381a109.714286 109.714286 0 1 1 0-219.428572H438.857143z m219.428571-438.857142c121.173333 0 219.428571 90.794667 219.428572 202.77638l-0.146286 7.14362c-2.706286 67.047619-42.788571 142.384762-108.592762 218.794666a900.096 900.096 0 0 1-77.360762 79.067429l-10.727619 9.557333-5.071238 4.412952-9.557333 8.118858L658.285714 633.904762l-7.972571-6.509714-9.557333-8.118858-10.361905-9.069714a900.096 900.096 0 0 1-82.797715-83.943619c-65.80419-76.434286-105.886476-151.79581-108.592761-218.819047a176.664381 176.664381 0 0 1-0.146286-7.14362c0-110.445714 95.573333-200.289524 214.454857-202.727619L658.285714 97.52381z m0 146.285714a73.142857 73.142857 0 1 0 0 146.285714 73.142857 73.142857 0 0 0 0-146.285714z" p-id="570"></path>',
      },
      address_6: {
        name: "address",
        svg_path:
          '<path d="M523.52 909.44c-192 0-384-51.2-384-149.12 0-53.44 57.6-97.6 162.24-124.16a32 32 0 1 1 15.68 61.76c-82.88 21.44-113.92 49.6-113.92 64 0 30.08 121.28 85.12 320 85.12s320-55.04 320-85.12c0-12.8-32-40.96-114.24-64a32 32 0 1 1 15.68-61.76c104.96 26.56 162.56 70.72 162.56 124.16 0 97.92-193.28 149.12-384 149.12zM523.52 710.72l-20.8-17.6c-23.04-19.52-224-194.24-224-323.2a245.44 245.44 0 0 1 490.56 0c0 128-201.6 303.68-224 323.2z m0-521.92a181.44 181.44 0 0 0-181.44 181.12c0 68.8 104 185.92 181.44 256 77.44-70.4 181.12-187.52 181.12-256a181.44 181.44 0 0 0-181.12-181.12zM523.52 508.8a138.88 138.88 0 1 1 138.56-138.88 139.2 139.2 0 0 1-138.56 138.88z m0-213.44a74.88 74.88 0 1 0 74.56 74.56 74.88 74.88 0 0 0-74.56-74.56z" p-id="620"></path>',
      },
      address_7: {
        name: "address",
        svg_path:
          '<path d="M832 389.3c-0.5 49.1-16.2 94.1-37.5 137.4-31.8 65-74 123-119.8 178.6-42.6 51.7-88.5 100.6-137.4 146.4-17.1 16-32.7 16.5-50.2 0.8-90.6-81.4-172.1-170.6-234.3-276.1-10.1-17.2-19.3-34.9-27.2-53.2-7.5-17.4-1-35.5 15.1-43 16.2-7.5 33.9-0.9 41.8 16.2 37.2 80.8 90.6 149.5 150 214.6 22.9 25.1 46.9 50.2 71.8 73.4 3.1 2.9 9 4.2 13.4-0.2 82.4-83 158.5-170 214.6-273.6C748.6 480.5 768 425.9 768 389c0-52.3-5.7-75.5-30.3-121-46.8-86.5-119.2-140-218.7-140-113.1 0-213.4 69.6-249 177.3-8.9 27.1-13.6 54.8-14 83.3-0.3 20.4-13.7 34.7-32.1 34.7-18.5 0-32-14.8-31.9-34.8 0.4-151.5 104.8-282.8 252-316.8C565.8 43.6 696.2 94.1 769.9 198c40.7 57.3 60.9 121.2 62.1 191.3zM512.5 256c-70.9-0.1-128.5 57.2-128.5 128 0 70.3 57.3 127.9 127.5 128 70.8 0.2 128.5-57.3 128.5-128 0-70.4-57.3-127.9-127.5-128z m0.6 192c-36 0.3-65.2-28.4-65.1-64.1 0.1-35.3 28.8-63.9 64.4-63.9 34.7 0 63.5 28.7 63.6 63.6 0.1 34.9-28.3 64.1-62.9 64.4zM960 928v-0.4-1-0.6c0-0.4 0-0.7-0.1-1.1 0-0.2 0-0.4-0.1-0.5 0-0.3-0.1-0.6-0.1-1 0-0.2-0.1-0.4-0.1-0.7 0-0.2-0.1-0.5-0.1-0.7-0.1-0.3-0.1-0.6-0.2-1 0-0.1 0-0.2-0.1-0.3-0.9-3.9-2.4-7.5-4.6-10.7L827 689.3c-8.6-14.9-27.8-20-42.6-11.4l-1.4 0.8c-14.9 8.6-20 27.8-11.4 42.6L872.5 896h-721l100.3-173.7c8.8-15.2 3.5-34.9-11.7-43.7-15.2-8.8-34.9-3.5-43.7 11.7L68.3 912c-1.2 2.1-2.1 4.2-2.8 6.5v0.1c-0.1 0.4-0.3 0.9-0.4 1.3 0 0.1-0.1 0.3-0.1 0.4-0.1 0.3-0.2 0.7-0.2 1 0 0.2-0.1 0.5-0.1 0.7 0 0.2-0.1 0.5-0.1 0.7-0.1 0.3-0.1 0.7-0.1 1 0 0.2 0 0.3-0.1 0.5 0 0.4-0.1 0.8-0.1 1.2v0.2c-0.1 0.8-0.1 1.5-0.1 2.3 0 4.4 0.9 8.7 2.6 12.5 2.6 6.2 7.2 11.6 13.4 15.2 4.5 2.6 9.4 4 14.2 4.2h833.8c16.8 0 30.7-13.2 31.9-29.7v-0.2-1-0.7c-0.1 0-0.1-0.1-0.1-0.2z" p-id="600"></path>',
      },

      bag_0: {
        name: "bag",
        svg_path:
          '<path d="M680.8 309.6H343.2v-33.8c0-2.8 0-5.6 0.2-8.2 0.2-2.8 0.4-5.6 0.6-8.2 0.2-2.8 0.6-5.4 1-8.2 0.4-2.8 0.8-5.4 1.4-8.2s1.2-5.4 1.8-8c0.6-2.6 1.4-5.4 2.2-8 0.8-2.6 1.6-5.2 2.6-7.8l3-7.8c1-2.6 2.2-5 3.4-7.6 1.2-2.4 2.4-5 3.8-7.4 1.4-2.4 2.6-4.8 4-7.2 1.4-2.4 2.8-4.8 4.4-7 1.6-2.2 3.2-4.6 4.8-6.8 1.6-2.2 3.4-4.4 5-6.6 1.8-2.2 3.6-4.2 5.4-6.2 1.8-2 3.8-4 5.8-6s4-3.8 6-5.8 4.2-3.6 6.2-5.4c2.2-1.8 4.4-3.4 6.6-5 2.2-1.6 4.4-3.2 6.8-4.8 2.2-1.6 4.6-3 7-4.4s4.8-2.8 7.2-4c2.4-1.4 5-2.6 7.4-3.8 2.4-1.2 5-2.2 7.6-3.4s5.2-2 7.8-3c2.6-1 5.2-1.8 7.8-2.6 2.6-0.8 5.4-1.6 8-2.2 2.6-0.6 5.4-1.2 8-1.8 2.8-0.6 5.4-1 8.2-1.4 2.8-0.4 5.4-0.8 8.2-1 2.8-0.2 5.6-0.4 8.2-0.6 2.8-0.2 5.6-0.2 8.2-0.2 2.8 0 5.6 0 8.2 0.2 2.8 0.2 5.6 0.4 8.2 0.6 2.8 0.2 5.4 0.6 8.2 1 2.8 0.4 5.4 0.8 8.2 1.4 2.8 0.6 5.4 1.2 8 1.8 2.6 0.6 5.4 1.4 8 2.2 2.6 0.8 5.2 1.6 7.8 2.6l7.8 3c2.6 1 5 2.2 7.6 3.4 2.4 1.2 5 2.4 7.4 3.8 2.4 1.4 4.8 2.6 7.2 4 2.4 1.4 4.8 2.8 7 4.4 2.2 1.6 4.6 3.2 6.8 4.8 2.2 1.6 4.4 3.4 6.6 5 2.2 1.8 4.2 3.6 6.2 5.4 2 1.8 4 3.8 6 5.8s3.8 4 5.8 6c1.8 2 3.6 4.2 5.4 6.2 1.8 2.2 3.4 4.4 5 6.6 1.6 2.2 3.2 4.4 4.8 6.8 1.6 2.2 3 4.6 4.4 7s2.8 4.8 4 7.2 2.6 5 3.8 7.4c1.2 2.4 2.2 5 3.4 7.6l3 7.8c1 2.6 1.8 5.2 2.6 7.8 0.8 2.6 1.6 5.4 2.2 8 0.6 2.6 1.2 5.4 1.8 8s1 5.4 1.4 8.2c0.4 2.8 0.8 5.4 1 8.2s0.4 5.6 0.6 8.2c0.2 2.8 0.2 5.6 0.2 8.2v33.8zM673.4 550l-189 236.2c-1.6 2-3.2 3.6-5.2 5.2s-4 2.8-6.2 4c-2.2 1-4.6 2-7 2.6-2.4 0.6-4.8 0.8-7.4 1h-0.6c-2.4 0-4.8-0.2-7.2-0.8-2.4-0.6-4.6-1.2-6.8-2.4-2.2-1-4.2-2.2-6.2-3.8-2-1.4-3.8-3.2-5.2-5l-81-94.6c-0.8-0.8-1.4-1.8-2-2.6-0.6-1-1.2-1.8-1.8-2.8-0.6-1-1-2-1.4-3l-1.2-3c-0.4-1-0.6-2.2-0.8-3.2-0.2-1-0.4-2.2-0.6-3.2-0.2-1-0.2-2.2-0.2-3.4v-3.4c0-1.2 0.2-2.2 0.4-3.2s0.4-2.2 0.8-3.2c0.2-1 0.6-2.2 1-3.2s0.8-2 1.4-3c0.6-1 1-2 1.6-2.8 0.6-1 1.2-1.8 2-2.8 0.6-0.8 1.4-1.8 2.2-2.4 0.8-0.8 1.6-1.6 2.4-2.2 0.8-0.8 1.8-1.4 2.6-2s1.8-1.2 2.8-1.8c1-0.6 2-1 3-1.4l3-1.2c1-0.4 2.2-0.6 3.2-0.8 1-0.2 2.2-0.4 3.2-0.6 1-0.2 2.2-0.2 3.4-0.2h3.4c1.2 0 2.2 0.2 3.2 0.4s2.2 0.4 3.2 0.8c1 0.2 2.2 0.6 3.2 1s2 0.8 3 1.4c1 0.6 2 1 2.8 1.6 1 0.6 1.8 1.2 2.6 2 0.8 0.6 1.8 1.4 2.4 2.2 0.8 0.8 1.6 1.6 2.2 2.4l54.6 63.6L620.6 508c0.6-0.8 1.4-1.6 2.2-2.4s1.6-1.6 2.4-2.2c0.8-0.8 1.8-1.4 2.6-2 1-0.6 1.8-1.2 2.8-1.8 1-0.6 2-1 3-1.4 1-0.4 2-0.8 3.2-1.2 1-0.4 2.2-0.6 3.2-0.8 1-0.2 2.2-0.4 3.2-0.6 1-0.2 2.2-0.2 3.4-0.2 1.2 0 2.2 0 3.4 0.2 1.2 0 2.2 0.2 3.2 0.4s2.2 0.4 3.2 0.8 2.2 0.6 3.2 1 2 0.8 3 1.4c1 0.6 2 1 2.8 1.6 1 0.6 1.8 1.2 2.6 2 0.8 0.6 1.6 1.4 2.4 2.2 0.8 0.8 1.6 1.6 2.2 2.4 0.8 0.8 1.4 1.8 2 2.6 0.6 1 1.2 1.8 1.8 2.8 0.6 1 1 2 1.4 3 0.4 1 0.8 2 1.2 3.2 0.4 1 0.6 2.2 0.8 3.2 0.2 1 0.4 2.2 0.6 3.2 0.2 1 0.2 2.2 0.2 3.4 0 1.2 0 2.2-0.2 3.4 0 1.2-0.2 2.2-0.4 3.2s-0.4 2.2-0.8 3.2-0.6 2.2-1 3.2-0.8 2-1.4 3c-0.6 1-1 2-1.6 2.8-0.4 0.6-1.2 1.6-1.8 2.4z m257.6-220.6c-3.2-3.2-6.6-6-10.2-8.4s-7.6-4.6-11.6-6.2c-4.2-1.8-8.4-3-12.6-3.8-4.4-0.8-8.8-1.2-13.2-1.2h-135V276c0-3.8 0-7.8-0.2-11.6s-0.4-7.8-0.8-11.6-0.8-7.6-1.4-11.6c-0.6-3.8-1.2-7.6-2-11.4-0.8-3.8-1.6-7.6-2.6-11.4-1-3.8-2-7.4-3-11.2-1.2-3.6-2.4-7.4-3.6-11-1.4-3.6-2.6-7.2-4.2-10.8-1.4-3.6-3-7.2-4.6-10.6s-3.4-7-5.2-10.4-3.8-6.8-5.8-10c-2-3.4-4-6.6-6.2-9.8-2.2-3.2-4.4-6.4-6.6-9.4-2.4-3.2-4.6-6.2-7.2-9.2s-5-6-7.6-8.8c-2.6-2.8-5.2-5.6-8-8.4-2.8-2.8-5.6-5.4-8.4-8-2.8-2.6-5.8-5.2-8.8-7.6-3-2.4-6-4.8-9.2-7.2-3.2-2.4-6.2-4.6-9.4-6.6-3.2-2.2-6.4-4.2-9.8-6.2-3.4-2-6.6-3.8-10-5.8-3.4-1.8-6.8-3.6-10.4-5.2-3.4-1.6-7-3.2-10.6-4.6l-10.8-4.2c-3.6-1.4-7.4-2.6-11-3.6-3.6-1.2-7.4-2.2-11.2-3s-7.6-1.8-11.4-2.6c-3.8-0.8-7.6-1.4-11.4-2-3.8-0.6-7.6-1-11.6-1.4-3.8-0.4-7.8-0.6-11.6-0.8s-7.8-0.2-11.6-0.2-7.8 0-11.6 0.2-7.8 0.4-11.6 0.8-7.6 0.8-11.6 1.4c-3.8 0.6-7.6 1.2-11.4 2s-7.6 1.6-11.4 2.6-7.4 2-11.2 3c-3.6 1.2-7.4 2.4-11 3.6-3.6 1.4-7.2 2.6-10.8 4.2s-7.2 3-10.6 4.6c-3.4 1.6-7 3.4-10.4 5.2s-6.8 3.8-10 5.8c-3.4 2-6.6 4-9.8 6.2-3.2 2.2-6.4 4.4-9.4 6.6s-6.2 4.6-9.2 7.2c-3 2.4-6 5-8.8 7.6-2.8 2.6-5.6 5.2-8.4 8-2.8 2.8-5.4 5.6-8 8.4-2.6 2.8-5.2 5.8-7.6 8.8-2.4 3-4.8 6-7.2 9.2-2.4 3.2-4.6 6.2-6.6 9.4s-4.2 6.4-6.2 9.8c-2 3.4-3.8 6.6-5.8 10-1.8 3.4-3.6 6.8-5.2 10.4-1.6 3.4-3.2 7-4.6 10.6l-4.2 10.8c-1.4 3.6-2.6 7.4-3.6 11-1.2 3.6-2.2 7.4-3 11.2-1 3.8-1.8 7.6-2.6 11.4-0.8 3.8-1.4 7.6-2 11.4-0.6 3.8-1 7.6-1.4 11.6-0.4 3.8-0.6 7.8-0.8 11.6-0.2 3.8-0.2 7.8-0.2 11.6v33.8H140.8c-2.2 0-4.4 0.2-6.6 0.4-2.2 0.2-4.4 0.6-6.6 1-2.2 0.4-4.4 1-6.4 1.6-2.2 0.6-4.2 1.4-6.2 2.2-2 0.8-4 1.8-6 2.8s-3.8 2.2-5.6 3.4c-1.8 1.2-3.6 2.6-5.4 4a52.438 52.438 0 0 0-9.4 9.4c-1.4 1.8-2.8 3.4-4 5.4-1.2 1.8-2.4 3.8-3.4 5.6s-2 4-2.8 6c-0.8 2-1.6 4.2-2.2 6.2-0.6 2.2-1.2 4.2-1.6 6.4-0.4 2.2-0.8 4.4-1 6.6-0.2 2.2-0.4 4.4-0.4 6.6v455.6c0 82.2 69.6 151.8 151.8 151.8h573.8c9.8 0 19.6-1 29.2-2.8s19-4.6 28.2-8.4c9.2-3.8 17.8-8.2 26-13.6s15.8-11.6 23-18.4c3.6-3.4 7-7 10.2-10.8 3.2-3.8 6.2-7.6 9-11.8 2.8-4 5.4-8.2 7.8-12.6 2.4-4.4 4.6-8.8 6.6-13.2 2-4.6 3.6-9.2 5.2-13.8 1.4-4.8 2.8-9.4 3.8-14.4 1-4.8 1.8-9.8 2.2-14.6 0.6-5 0.8-9.8 0.8-14.8V377c0-4.4-0.4-8.8-1.2-13.2-0.8-4.4-2.2-8.6-3.8-12.6s-3.8-8-6.2-11.6c-2.6-3.8-5.4-7.2-8.6-10.2z"></path>',
      },
      bag_1: {
        name: "bag",
        svg_path:
          '<path d="M887.84896 522.5472A244.69504 244.69504 0 0 0 737.28 471.04c-135.72096 0-245.76 110.03904-245.76 245.76a245.1456 245.1456 0 0 0 83.21024 184.32H365.44512c-107.17184 0-197.05856-79.13472-208.2816-183.35744L102.87104 213.38112c-4.85376-44.99456 28.52864-85.31968 74.5472-90.05056 2.90816-0.3072 5.8368-0.45056 8.76544-0.45056h651.63264C884.1216 122.88 921.6 159.5392 921.6 204.8c0 2.8672-0.16384 5.7344-0.45056 8.58112l-33.30048 309.16608zM327.68 245.76a184.32 184.32 0 0 0 368.64 0 40.96 40.96 0 1 0-81.92 0 102.4 102.4 0 0 1-204.8 0 40.96 40.96 0 1 0-81.92 0z m409.6 655.36a184.32 184.32 0 1 1 0-368.64 184.32 184.32 0 0 1 0 368.64z m40.96-225.28v-40.96a40.96 40.96 0 1 0-81.92 0v40.96h-40.96a40.96 40.96 0 1 0 0 81.92h40.96v40.96a40.96 40.96 0 1 0 81.92 0v-40.96h40.96a40.96 40.96 0 1 0 0-81.92h-40.96z" p-id="3126"></path>',
      },
      bag_2: {
        name: "bag",
        svg_path:
          '<path d="M186.1632 122.88h651.6736C884.08064 122.88 921.6 159.5392 921.6 204.8c0 2.8672-0.16384 5.7344-0.45056 8.58112l-54.31296 504.38144C855.6544 822.00576 765.7472 901.12 658.55488 901.12H365.44512c-107.17184 0-197.05856-79.13472-208.2816-183.35744L102.87104 213.38112c-4.85376-44.99456 28.52864-85.31968 74.5472-90.05056 2.90816-0.3072 5.8368-0.45056 8.76544-0.45056zM667.648 819.2a131.072 131.072 0 0 0 131.072-131.072 32.768 32.768 0 1 0-65.536 0 65.536 65.536 0 0 1-65.536 65.536 32.768 32.768 0 1 0 0 65.536zM327.68 245.76a184.32 184.32 0 0 0 368.64 0 40.96 40.96 0 1 0-81.92 0 102.4 102.4 0 0 1-204.8 0 40.96 40.96 0 1 0-81.92 0z" p-id="3146"></path>',
      },
      bag_3: {
        name: "bag",
        svg_path:
          '<path d="M880.76288 533.7088A244.8384 244.8384 0 0 0 716.8 471.04c-135.72096 0-245.76 110.03904-245.76 245.76a245.1456 245.1456 0 0 0 83.21024 184.32h-184.29952a204.8 204.8 0 0 1-203.75552-184.17664L123.0848 372.736A40.96 40.96 0 0 1 163.84 327.68h143.36c0-113.11104 91.68896-204.8 204.8-204.8s204.8 91.68896 204.8 204.8h143.36a40.96 40.96 0 0 1 40.7552 45.07648l-20.15232 160.9728zM389.12 327.68h245.76a122.88 122.88 0 1 0-245.76 0z m327.68 573.44a184.32 184.32 0 1 1 0-368.64 184.32 184.32 0 0 1 0 368.64z m40.96-225.28v-40.96a40.96 40.96 0 1 0-81.92 0v40.96h-40.96a40.96 40.96 0 1 0 0 81.92h40.96v40.96a40.96 40.96 0 1 0 81.92 0v-40.96h40.96a40.96 40.96 0 1 0 0-81.92h-40.96z" p-id="3156"></path>',
      },

      calender_0: {
        name: "calender",
        svg_path:
          '<path d="M941.98897778 960.67887408h-864.1042963c-21.48124445 0-38.83614815-17.3549037-38.83614815-38.83614816V372.55395555c0-21.48124445 17.3549037-38.83614815 38.83614815-38.83614814h864.1042963c21.48124445 0 38.83614815 17.3549037 38.83614814 38.83614814v549.28877037c0 21.48124445-17.3549037 38.83614815-38.83614814 38.83614816z m-825.26814815-77.6722963h786.432V411.3901037h-786.432v471.61647408zM941.98897778 403.98696297h-864.1042963c-21.48124445 0-38.83614815-17.3549037-38.83614815-38.83614815V154.95016297c0-21.48124445 17.3549037-38.83614815 38.83614815-38.83614815h864.1042963c21.48124445 0 38.83614815 17.3549037 38.83614814 38.83614815V365.15081482c0 21.48124445-17.3549037 38.83614815-38.83614814 38.83614815z m-825.26814815-77.6722963h786.432V193.78631111h-786.432V326.31466667zM302.40616297 59.07342222h77.67229628v182.04444445h-77.67229628zM661.15508148 59.07342222h77.6722963v182.04444445h-77.6722963zM239.29742222 498.65007408h111.04711111v77.67229629h-111.04711111zM460.5421037 498.65007408h111.04711112v77.67229629h-111.04711112zM681.78678518 498.65007408h111.04711112v77.67229629h-111.04711112zM239.29742222 683.12177778h111.04711111v77.6722963h-111.04711111zM460.5421037 683.12177778h111.04711112v77.6722963h-111.04711112zM681.78678518 683.12177778h111.04711112v77.6722963h-111.04711112z" p-id="560"></path>',
      },

      car_0: {
        name: "car",
        svg_path:
          '<path d="M937 644.6h-22.4V493.5c0-17.8-7.1-34.8-19.7-47.4L755.1 306.3c-12.6-12.6-29.7-19.7-47.4-19.7H646v-67.1c0-37.1-30.1-67.1-67.1-67.1h-358c-37.1 0-67.1 30.1-67.1 67.1v67.1H75.4c-6.2 0-11.2 5-11.2 11.2v22.4c0 6.2 5 11.2 11.2 11.2h380.4c6.2 0 11.2 5 11.2 11.2V365c0 6.2-5 11.2-11.2 11.2H120.2c-6.2 0-11.2 5-11.2 11.2v22.4c0 6.2 5 11.2 11.2 11.2h290.9c6.2 0 11.2 5 11.2 11.2v22.4c0 6.2-5 11.2-11.2 11.2H75.4c-6.2 0-11.2 5-11.2 11.2v22.4c0 6.2 5 11.2 11.2 11.2h290.9c6.2 0 11.2 5 11.2 11.2v22.4c0 6.2-5 11.2-11.2 11.2H153.7v179c0 74.1 60.1 134.3 134.3 134.3s134.3-60.1 134.3-134.3h179c0 74.1 60.1 134.3 134.3 134.3s134.3-60.1 134.3-134.3H937c12.3 0 22.4-10.1 22.4-22.4v-45c-0.1-12.3-10.1-22.4-22.4-22.4zM288 801.3c-37.1 0-67.1-30.1-67.1-67.1 0-37.1 30.1-67.1 67.1-67.1s67.1 30.1 67.1 67.1c0 37-30 67.1-67.1 67.1z m447.6 0c-37.1 0-67.1-30.1-67.1-67.1 0-37.1 30.1-67.1 67.1-67.1s67.1 30.1 67.1 67.1c0 37-30.1 67.1-67.1 67.1z m111.8-290.9H646V353.7h61.7l139.7 139.7v17z"></path>',
      },
      car_1: {
        name: "car",
        svg_path:
          '<path d="M377.979122 763.293303c0 46.266743-37.497009 83.764775-83.767845 83.764776-46.26572 0-83.764775-37.497009-83.764776-83.764776 0-46.270836 37.499056-83.762729 83.764776-83.762729 46.269813-0.005117 83.767845 37.491892 83.767845 83.762729z m0 0M847.056544 763.293303c0 46.266743-37.497009 83.764775-83.762729 83.764776-46.266743 0-83.764775-37.497009-83.764776-83.764776 0-46.270836 37.497009-83.762729 83.764776-83.762729 46.26572-0.005117 83.762729 37.491892 83.762729 83.762729z m0 0M921.924695 477.839992l-74.868151-133.370566c-15.312754-18.454304-25.64917-33.505092-50.257638-33.505092H679.529039v-100.516298c0-18.454304-15.050788-33.505092-33.505091-33.505091H109.930203c-18.454304 0-33.505092 15.050788-33.505091 33.505091v502.583537c0 18.459421 15.050788 33.510208 33.505091 33.510208h66.815755c8.212032-57.725726 57.491389-102.413508 117.464295-102.413508 59.977 0 109.256356 44.687782 117.469412 102.413508l234.143715-0.033769c8.244778-57.719586 57.525158-102.378715 117.469411-102.378716 59.977 0 109.252263 44.687782 117.468389 102.413508h33.305547c18.454304 0 33.507138-15.050788 33.507138-33.510208V545.502022c0-31.737842-25.64917-67.662029-25.64917-67.66203z m-208.890564 67.66203V377.974517h81.962733c5.399987 0 12.893658 7.918343 12.893658 7.918344l70.541613 131.146922c6.250354 9.191336 13.023618 20.089547 13.023618 28.462239H713.034131z m0 0" p-id="3065"></path>',
      },
      car_2: {
        name: "car",
        svg_path:
          '<path d="M273.066667 580.266667c-75.093333 0-136.533333 61.44-136.533334 136.533333s61.44 136.533333 136.533334 136.533333 136.533333-61.44 136.533333-136.533333-61.44-136.533333-136.533333-136.533333zM750.933333 580.266667c-75.093333 0-136.533333 61.44-136.533333 136.533333s61.44 136.533333 136.533333 136.533333 136.533333-61.44 136.533334-136.533333-61.44-136.533333-136.533334-136.533333z" fill="" p-id="537"></path><path d="M972.8 351.573333l-180.906667-150.186666c-23.893333-20.48-54.613333-30.72-88.746666-30.72H276.48c-34.133333 0-64.853333 13.653333-85.333333 34.133333h133.12c10.24 0 17.066667 6.826667 17.066666 17.066667s-6.826667 17.066667-17.066666 17.066666h-307.2c-10.24 0-17.066667 6.826667-17.066667 17.066667s6.826667 17.066667 17.066667 17.066667h133.12l-34.133334 68.266666h109.226667c6.826667 0 13.653333 6.826667 13.653333 17.066667s-6.826667 17.066667-17.066666 17.066667h-204.8c-10.24 0-17.066667 6.826667-17.066667 17.066666s6.826667 17.066667 17.066667 17.066667h61.44l-34.133334 68.266667h109.226667c10.24 0 17.066667 6.826667 17.066667 17.066666s-6.826667 17.066667-17.066667 17.066667h-136.533333c-10.24 0-17.066667 6.826667-17.066667 17.066667 0 6.826667 3.413333 13.653333 10.24 17.066666-6.826667 17.066667-10.24 34.133333-10.24 51.2 0 51.2 34.133333 95.573333 81.92 112.64 3.413333 3.413333 10.24 0 13.653333 0 3.413333-3.413333 6.826667-10.24 6.826667-13.653333 13.653333-85.333333 85.333333-150.186667 170.666667-150.186667 88.746667 0 160.426667 68.266667 170.666666 153.6 0 10.24 6.826667 17.066667 17.066667 17.066667h105.813333c10.24 0 17.066667-6.826667 17.066667-17.066667 6.826667-85.333333 81.92-153.6 170.666667-153.6 78.506667 0 146.773333 54.613333 167.253333 133.12 0 6.826667 6.826667 13.653333 13.653333 13.653334s13.653333-3.413333 17.066667-10.24l40.96-81.92c23.893333-44.373333 34.133333-92.16 34.133333-143.36-3.413333-40.96-20.48-78.506667-54.613333-105.813334z m-68.266667 109.226667l-238.933333 17.066667c-3.413333 0-10.24-3.413333-13.653333-6.826667-3.413333-3.413333-3.413333-6.826667-3.413334-13.653333l34.133334-170.666667c0-6.826667 6.826667-10.24 10.24-13.653333 6.826667-3.413333 10.24 0 17.066666 3.413333l204.8 153.6c6.826667 3.413333 6.826667 10.24 6.826667 17.066667-3.413333 6.826667-10.24 13.653333-17.066667 13.653333z" fill="" p-id="538"></path>',
      },

      cart_0: {
        name: "cart",
        svg_path:
          '<path d="M375.466667 785.066667c-64.853333 0-119.466667 54.613333-119.466667 119.466666S310.613333 1024 375.466667 1024s119.466667-54.613333 119.466666-119.466667S440.32 785.066667 375.466667 785.066667zM785.066667 785.066667c-64.853333 0-119.466667 54.613333-119.466667 119.466666S720.213333 1024 785.066667 1024s119.466667-54.613333 119.466666-119.466667S849.92 785.066667 785.066667 785.066667zM938.666667 426.666667c-44.373333 34.133333-98.986667 51.2-153.6 51.2-139.946667 0-256-116.053333-256-256 0-10.24-6.826667-17.066667-17.066667-17.066667H208.213333l-20.48-122.88c0-6.826667-10.24-13.653333-17.066666-13.653333H34.133333c-10.24 0-17.066667 6.826667-17.066666 17.066666s6.826667 17.066667 17.066666 17.066667h122.88L238.933333 634.88c13.653333 64.853333 81.92 116.053333 153.6 116.053333H887.466667c10.24 0 17.066667-6.826667 17.066666-17.066666s-6.826667-17.066667-17.066666-17.066667H392.533333c-54.613333 0-109.226667-40.96-119.466666-88.746667L266.24 580.266667H853.333333c54.613333 0 95.573333-34.133333 102.4-78.506667l10.24-58.026667c0-6.826667-3.413333-13.653333-6.826666-17.066666-6.826667-6.826667-13.653333-6.826667-20.48 0z"></path><path d="M785.066667 0c-122.88 0-221.866667 98.986667-221.866667 221.866667S662.186667 443.733333 785.066667 443.733333s221.866667-98.986667 221.866666-221.866666S907.946667 0 785.066667 0z m116.053333 167.253333l-170.666667 170.666667c-3.413333 3.413333-10.24 3.413333-13.653333 3.413333s-10.24 0-13.653333-3.413333l-68.266667-68.266667c-6.826667-6.826667-6.826667-17.066667 0-23.893333s17.066667-6.826667 23.893333 0L716.8 300.373333l157.013333-157.013333c6.826667-6.826667 17.066667-6.826667 23.893334 0s6.826667 17.066667 3.413333 23.893333z"></path>',
      },
      cart_1: {
        name: "cart",
        svg_path:
          '<path d="M940.9 236H282.8c-8 0-14.8-5.6-16.3-13.4l-12.8-64.9c-3.3-16.7-18-28.8-35-28.8h-119C80 129 64 144.9 64 164.7c0 19.7 16 35.7 35.7 35.7h89.6s0.1 0 0.1 0.1l94.2 477.9c3.3 16.7 18 28.8 35 28.8h476.2c19.5 0 36-15.3 36.5-34.7 0.5-20.1-15.7-36.6-35.7-36.6h-434c-8 0-14.8-5.6-16.3-13.4l-10.1-51.2c-2-10.3 5.8-19.9 16.3-19.9h478.1c6.8 0 12.9-4.1 15.4-10.4l113.6-278.6c5.1-12.7-4.1-26.4-17.7-26.4zM375.1 815.9m-79.1 0a79.1 79.1 0 1 0 158.2 0 79.1 79.1 0 1 0-158.2 0ZM730.8 815.9m-79.1 0a79.1 79.1 0 1 0 158.2 0 79.1 79.1 0 1 0-158.2 0Z" p-id="2981"></path>',
      },
      cart_2: {
        name: "cart",
        svg_path:
          '<path d="M1019.409448 287.764959l0.078795 0.035816-143.958716 317.510424-0.004093 0c-7.104815 15.640212-22.458501 26.789133-40.568974 27.970028l0 0.008186-414.579203 27.434839 23.950482 67.927065 451.420273 0c53.009308 0 95.975888 42.647309 95.975888 95.254457 0 52.608172-42.966581 95.253434-95.975888 95.253434-53.002145 0-95.974865-42.645263-95.974865-95.253434L351.901699 823.905776c0 52.608172-42.969651 95.253434-95.973842 95.253434-53.002145 0-95.972818-42.645263-95.972818-95.253434 0-52.607148 42.970674-95.254457 95.972818-95.254457l86.721107 0-184.747701-523.899004L47.986921 204.752314c-26.501584 0-47.986921-21.321608-47.986921-47.629787 0-26.305109 21.485337-47.62774 47.986921-47.62774l143.959739 0c20.939915 0 38.563294 13.397125 45.113477 31.955806l0.177032-0.054235 27.943422 79.232552 710.549032 0c26.500561 0 47.986921 21.320585 47.986921 47.623647C1023.715521 275.221272 1022.123256 281.798061 1019.409448 287.764959zM298.770618 315.883367l88.708368 251.54606 412.353512-27.282367 101.679797-224.263693L298.770618 315.883367z" p-id="3002"></path>',
      },
      cart_3: {
        name: "cart",
        svg_path:
          '<path d="M358.4 921.6m-102.4 0a102.4 102.4 0 1 0 204.8 0 102.4 102.4 0 1 0-204.8 0Z" fill="" p-id="3176"></path><path d="M802.133333 921.6m-102.4 0a102.4 102.4 0 1 0 204.8 0 102.4 102.4 0 1 0-204.8 0Z" fill="" p-id="3177"></path><path d="M928.426667 443.733333c-37.546667 20.48-81.92 34.133333-126.293334 34.133334-129.706667 0-238.933333-95.573333-252.586666-225.28-3.413333-6.826667-10.24-13.653333-17.066667-13.653334H184.32l-23.893333-122.88c0-6.826667-6.826667-13.653333-13.653334-13.653333H17.066667c-10.24 0-17.066667 6.826667-17.066667 17.066667s6.826667 17.066667 17.066667 17.066666h112.64l23.893333 116.053334v6.826666l20.48 102.4 61.44 303.786667c13.653333 68.266667 71.68 119.466667 143.36 119.466667h491.52c10.24 0 17.066667-6.826667 17.066667-17.066667s-6.826667-17.066667-17.066667-17.066667H378.88c-44.373333 0-85.333333-27.306667-102.4-71.68l631.466667-78.506666c6.826667 0 13.653333-6.826667 13.653333-13.653334l34.133333-122.88c3.413333-6.826667 0-13.653333-6.826666-17.066666-6.826667-6.826667-13.653333-6.826667-20.48-3.413334z" fill="" p-id="3178"></path><path d="M802.133333 0C679.253333 0 580.266667 98.986667 580.266667 221.866667s98.986667 221.866667 221.866666 221.866666S1024 344.746667 1024 221.866667 925.013333 0 802.133333 0z m68.266667 238.933333H819.2v51.2c0 10.24-6.826667 17.066667-17.066667 17.066667s-17.066667-6.826667-17.066666-17.066667V238.933333h-51.2c-10.24 0-17.066667-6.826667-17.066667-17.066666s6.826667-17.066667 17.066667-17.066667H785.066667V153.6c0-10.24 6.826667-17.066667 17.066666-17.066667s17.066667 6.826667 17.066667 17.066667V204.8h51.2c10.24 0 17.066667 6.826667 17.066667 17.066667s-6.826667 17.066667-17.066667 17.066666z" fill="" p-id="3179"></path>',
      },
      cart_4: {
        name: "cart",
        svg_path:
          '<path d="M375.466667 785.066667c-64.853333 0-119.466667 54.613333-119.466667 119.466666S310.613333 1024 375.466667 1024s119.466667-54.613333 119.466666-119.466667S440.32 785.066667 375.466667 785.066667zM785.066667 785.066667c-64.853333 0-119.466667 54.613333-119.466667 119.466666S720.213333 1024 785.066667 1024s119.466667-54.613333 119.466666-119.466667S849.92 785.066667 785.066667 785.066667zM938.666667 426.666667c-44.373333 34.133333-98.986667 51.2-153.6 51.2-139.946667 0-256-116.053333-256-256 0-10.24-6.826667-17.066667-17.066667-17.066667H208.213333L187.733333 81.92c0-6.826667-10.24-13.653333-17.066666-13.653333H34.133333c-10.24 0-17.066667 6.826667-17.066666 17.066666s6.826667 17.066667 17.066666 17.066667h122.88L238.933333 634.88c13.653333 64.853333 81.92 116.053333 153.6 116.053333H887.466667c10.24 0 17.066667-6.826667 17.066666-17.066666s-6.826667-17.066667-17.066666-17.066667H392.533333c-54.613333 0-109.226667-40.96-119.466666-88.746667l-6.826667-47.786666H853.333333c54.613333 0 95.573333-34.133333 102.4-78.506667l10.24-58.026667c0-6.826667-3.413333-13.653333-6.826666-17.066666-6.826667-6.826667-13.653333-6.826667-20.48 0z" fill="" p-id="3189"></path><path d="M785.066667 443.733333c122.88 0 221.866667-98.986667 221.866666-221.866666S907.946667 0 785.066667 0s-221.866667 98.986667-221.866667 221.866667S662.186667 443.733333 785.066667 443.733333z m-68.266667-238.933333h51.2V153.6c0-10.24 6.826667-17.066667 17.066667-17.066667s17.066667 6.826667 17.066666 17.066667V204.8H853.333333c10.24 0 17.066667 6.826667 17.066667 17.066667s-6.826667 17.066667-17.066667 17.066666h-51.2v51.2c0 10.24-6.826667 17.066667-17.066666 17.066667s-17.066667-6.826667-17.066667-17.066667V238.933333H716.8c-10.24 0-17.066667-6.826667-17.066667-17.066666s6.826667-17.066667 17.066667-17.066667z" fill="" p-id="3190"></path>',
      },
      cart_5: {
        name: "cart",
        svg_path:
          '<path d="M810.666667 874.666667m-106.666667 0a106.666667 106.666667 0 1 0 213.333333 0 106.666667 106.666667 0 1 0-213.333333 0ZM384 874.666667m-106.666667 0a106.666667 106.666667 0 1 0 213.333334 0 106.666667 106.666667 0 1 0-213.333334 0ZM896 725.333333H403.584a149.76 149.76 0 0 1-146.432-120.021333L153.173333 85.333333H42.666667a21.333333 21.333333 0 0 1 0-42.666666h128a21.333333 21.333333 0 0 1 20.906666 17.152L299.008 596.906667A106.965333 106.965333 0 0 0 403.584 682.666667H896a21.333333 21.333333 0 0 1 0 42.666666zM997.333333 177.877333A21.376 21.376 0 0 0 981.333333 170.666667H213.333333a21.333333 21.333333 0 0 0 0 42.666666h4.266667l76.928 384.64a21.205333 21.205333 0 0 0 6.912 41.856l640-85.333333a21.290667 21.290667 0 0 0 18.346667-18.517333l42.666666-341.333334a21.077333 21.077333 0 0 0-5.12-16.768zM387.498667 554.368a21.333333 21.333333 0 0 1-24.576-17.536l-42.666667-256a21.333333 21.333333 0 0 1 42.112-6.997333l42.666667 256a21.333333 21.333333 0 0 1-17.536 24.533333z m105.088-21.12c-0.64 0.085333-1.28 0.085333-1.962667 0.085333a21.333333 21.333333 0 0 1-21.248-19.413333l-21.333333-234.666667a21.333333 21.333333 0 0 1 19.328-23.168 21.077333 21.077333 0 0 1 23.168 19.328l21.333333 234.666667a21.290667 21.290667 0 0 1-19.285333 23.168zM618.666667 490.666667a21.333333 21.333333 0 0 1-42.666667 0v-213.333334a21.333333 21.333333 0 0 1 42.666667 0v213.333334z m106.538666-18.986667a21.333333 21.333333 0 1 1-42.453333-4.693333l21.333333-192a21.76 21.76 0 0 1 23.552-18.858667 21.376 21.376 0 0 1 18.858667 23.552l-21.290667 192z m148.821334-189.184l-42.666667 170.666667a21.333333 21.333333 0 1 1-41.429333-10.325334l42.666666-170.666666a21.333333 21.333333 0 1 1 41.429334 10.325333z" p-id="3136"></path>',
      },

      check_0: {
        name: "check",
        svg_path:
          '<path d="M369.792 704.32L930.304 128 1024 223.616 369.984 896l-20.288-20.864-0.128 0.128L0 516.8l96.128-93.12 273.664 280.64z"></path>',
      },
      check_1: {
        name: "check",
        svg_path:
          '<path d="M512 65.984C266.08 65.984 65.984 266.08 65.984 512c0 245.952 200.064 446.016 446.016 446.016 245.952 0 446.016-200.064 446.016-446.016C958.016 266.08 757.952 65.984 512 65.984zM727.232 438.432l-256.224 259.008c-0.064 0.064-0.192 0.096-0.256 0.192-0.096 0.064-0.096 0.192-0.192 0.256-2.048 1.984-4.576 3.2-6.944 4.544-1.184 0.672-2.144 1.696-3.392 2.176-3.84 1.536-7.904 2.336-11.968 2.336-4.096 0-8.224-0.8-12.096-2.4-1.28-0.544-2.304-1.632-3.52-2.304-2.368-1.344-4.832-2.528-6.88-4.544-0.064-0.064-0.096-0.192-0.16-0.256-0.064-0.096-0.192-0.096-0.256-0.192l-126.016-129.504c-12.32-12.672-12.032-32.928 0.64-45.248 12.672-12.288 32.896-12.064 45.248 0.64l103.264 106.112 233.28-235.84c12.416-12.576 32.704-12.704 45.248-0.256C739.52 405.6 739.648 425.856 727.232 438.432z" p-id="7295"></path>',
      },
      check_2: {
        name: "check",
        svg_path:
          '<path d="M941.275 210.8c25 25 25 65.6 0 90.6l-512 512c-25 25-65.6 25-90.6 0l-256-256c-25-25-25-65.6 0-90.6s65.6-25 90.6 0L384.075 677.4l466.8-466.6c25-25 65.6-25 90.6 0z" p-id="8198"></path>',
      },
      check_3: {
        name: "check",
        svg_path:
          '<path d="M853.32992 102.4H170.67008C133.13024 102.4 102.4 133.13024 102.4 170.67008v682.65984C102.4 890.86976 133.13024 921.6 170.67008 921.6h682.65984C890.86976 921.6 921.6 890.86976 921.6 853.32992V170.67008C921.6 133.13024 890.86976 102.4 853.32992 102.4zM457.8304 716.8L204.8 463.72864l48.27136-48.26112 204.75904 204.8L770.92864 307.2 819.2 355.47136 457.8304 716.8z" p-id="8260"></path>',
      },
      check_4: {
        name: "check",
        svg_path:
          '<path d="M347.796 878.808l-332.8-332.8c-19.994-19.994-19.994-52.412 0-72.408l72.406-72.408c19.994-19.996 52.414-19.996 72.408 0L384 625.38 864.19 145.192c19.994-19.994 52.414-19.994 72.408 0l72.406 72.408c19.994 19.994 19.994 52.412 0 72.408l-588.8 588.802c-19.996 19.994-52.414 19.994-72.408-0.002z" p-id="9199"></path>',
      },
      check_5: {
        name: "check",
        svg_path:
          '<path d="M839.68 0H184.306C82.944 0 0 82.937 0 184.333v655.361C0 941.055 82.944 1024 184.306 1024H839.68c101.362 0 184.32-82.945 184.32-184.306V184.333C1024 82.937 941.042 0 839.68 0m-3.826 380.055L481.438 735.326c-10.216 10.229-30.383 18.59-44.834 18.59h-30.618c-14.451 0-34.618-8.388-44.813-18.604L194.277 567.617c-10.214-10.229-10.187-26.98 0.043-37.201l65.66-65.667c10.229-10.222 26.951-10.222 37.18-0.028l106.654 106.425c10.221 10.214 26.937 10.187 37.146-0.028l292.271-292.979c10.207-10.222 26.951-10.25 37.187-0.084l65.354 64.896c10.248 10.181 10.291 26.882 0.082 37.104" p-id="10911"></path>',
      },

      clock_0: {
        name: "clock",
        svg_path:
          '<path d="M512 64.383234C264.7878 64.383234 64.383234 264.7878 64.383234 512s200.404567 447.616766 447.616766 447.616766 447.616766-200.404567 447.616766-447.616766S759.2122 64.383234 512 64.383234zM691.046707 601.523353 512 601.523353c-24.721118 0-44.761677-20.040559-44.761677-44.761677 0 0 0 0 0-0.001022s0 0 0-0.001022L467.238323 288.191617c0-24.721118 20.040559-44.761677 44.761677-44.761677 24.721118 0 44.761677 20.040559 44.761677 44.761677l0 223.808383 134.28503 0c24.721118 0 44.761677 20.040559 44.761677 44.761677S715.767824 601.523353 691.046707 601.523353z" p-id="499"></path>',
      },
      clock_1: {
        name: "clock",
        svg_path:
          '<path d="M979.701586 327.496869C929.450089 208.863958 835.427692 113.743554 718.139405 62.890352c31.730679-25.284873 71.676459-40.442084 115.163903-40.442084 102.908788 0 186.378851 84.424808 186.378851 188.538027C1019.682159 255.042697 1004.667188 295.41315 979.701586 327.496869zM972.087165 536.080441c0 123.662461-47.985898 235.710396-125.753075 319.073012l64.381309 65.088414c8.499581 8.640798 13.775748 20.539802 13.775748 33.711799 0 26.278503-21.071921 47.597041-47.063899 47.597041-12.995989 0-24.752754-5.311982-33.287127-13.953803l-69.127404-69.905116c-74.579579 52.694129-165.131945 83.857896-263.013229 83.857896-97.704253 0-188.078563-31.021527-262.587534-83.574441l-68.630077 69.478398c-8.640798 8.712429-20.538779 14.09502-33.67803 14.09502-26.276457 0-47.596018-21.601994-47.596018-48.160883 0-13.316284 5.348821-25.356504 13.917988-34.06791l63.850214-64.594157c-77.520561-83.290985-125.363196-195.196681-125.363196-318.647317 0-257.099543 205.998701-465.469244 460.086653-465.469244C766.089487 70.611198 972.087165 278.980899 972.087165 536.080441zM511.999488 166.863379c-201.535039 0-364.896664 165.307953-364.896664 369.218086 0 203.837478 163.361625 369.145431 364.896664 369.145431 201.537086 0 364.897687-165.307953 364.897687-369.145431C876.897176 332.171332 713.536574 166.863379 511.999488 166.863379zM702.38049 584.242348 511.999488 584.242348c-26.311249 0-47.594995-21.600971-47.594995-48.160883L464.404494 279.265378c0-26.631544 21.283746-48.161906 47.594995-48.161906 26.313296 0 47.597041 21.530362 47.597041 48.161906l0 208.653157L702.38049 487.918535c26.312272 0 47.597041 21.532409 47.597041 48.161906C749.976508 562.640354 728.692762 584.242348 702.38049 584.242348zM45.148781 334.013283c-25.497721-32.791847-40.831964-74.013691-40.831964-118.986975 0-106.380866 85.23936-192.575993 190.381002-192.575993 44.444235 0 85.204567 15.510252 117.607558 41.291428C192.501804 115.656113 96.498286 212.830293 45.148781 334.013283z" p-id="529"></path>',
      },
      clock_2: {
        name: "clock",
        svg_path:
          '<path d="M660.48 872.448q6.144 0-3.584 15.36t-29.696 33.792-47.104 33.792-57.856 15.36q-27.648 0-53.248-15.36t-45.056-33.792-29.696-33.792-6.144-15.36l272.384 0zM914.432 785.408q7.168 9.216 6.656 17.92t-4.608 14.848-10.24 9.728-12.288 3.584l-747.52 0q-14.336 0-20.992-11.776t4.608-29.184q17.408-30.72 40.96-68.608t44.544-81.408 36.352-92.16 15.36-101.888q0-51.2 14.336-92.16t37.376-71.68 53.248-52.224 62.976-32.768q-16.384-26.624-16.384-55.296 0-41.984 28.672-70.656t70.656-28.672 70.656 28.672 28.672 70.656q0 14.336-4.096 28.16t-11.264 25.088q34.816 11.264 66.048 32.768t54.272 53.248 36.864 72.704 13.824 91.136q0 51.2 15.36 100.864t36.864 94.208 45.568 81.408 43.52 63.488zM478.208 142.336q0 16.384 11.264 28.16t27.648 11.776l2.048 0q16.384-1.024 27.648-12.288t11.264-27.648q0-17.408-11.264-28.672t-28.672-11.264-28.672 11.264-11.264 28.672z" p-id="519"></path>',
      },

      fire_0: {
        name: "fire",
        svg_path:
          '<path d="M880.114286 463.085714A397.131429 397.131429 0 0 0 785.371429 331.428571l-33.257143-30.514285a9.245714 9.245714 0 0 0-14.857143 3.771428l-14.857143 42.628572c-9.257143 26.742857-26.285714 54.057143-50.4 80.914285-1.6 1.714286-3.428571 2.171429-4.685714 2.285715-1.257143 0.114286-3.2-0.114286-4.914286-1.714286-1.6-1.371429-2.4-3.428571-2.285714-5.485714 4.228571-68.8-16.342857-146.4-61.371429-230.857143C561.485714 122.285714 509.714286 67.542857 445.028571 29.371429l-47.2-27.771429c-6.171429-3.657143-14.057143 1.142857-13.714285 8.342857l2.514285 54.857143c1.714286 37.485714-2.628571 70.628571-12.914285 98.171429-12.571429 33.714286-30.628571 65.028571-53.714286 93.142857a337.874286 337.874286 0 0 1-54.285714 52.685714 402.971429 402.971429 0 0 0-114.628572 138.857143A397.428571 397.428571 0 0 0 109.714286 624c0 53.942857 10.628571 106.171429 31.657143 155.428571a399.314286 399.314286 0 0 0 86.285714 126.742858c37.028571 36.571429 80 65.371429 127.885714 85.371428C405.142857 1012.342857 457.714286 1022.857143 512 1022.857143s106.857143-10.514286 156.457143-31.2A398.4 398.4 0 0 0 796.342857 906.285714c37.028571-36.571429 66.057143-79.314286 86.285714-126.742857a393.371429 393.371429 0 0 0 31.657143-155.428571c0-55.771429-11.428571-109.942857-34.171428-161.028572z"></path>',
      },
      fire_1: {
        name: "fire",
        svg_path:
          '<path d="M336 972.8c-60.8-128-28.8-201.6 19.2-268.8 51.2-76.8 64-150.4 64-150.4s41.6 51.2 25.6 134.4c70.4-80 83.2-208 73.6-256 160 112 230.4 358.4 137.6 537.6 492.8-281.6 121.6-700.8 57.6-745.6 22.4 48 25.6 128-19.2 166.4-73.6-281.6-256-336-256-336 22.4 144-76.8 300.8-172.8 419.2-3.2-57.6-6.4-96-38.4-153.6-6.4 105.6-86.4 188.8-108.8 294.4C89.6 758.4 140.8 860.8 336 972.8L336 972.8z" p-id="3012"></path>',
      },
      fire_2: {
        name: "fire",
        svg_path:
          '<path d="M597.338126 0c-41.130667 164.590933-121.924267 285.149867-194.628267 387.242667C345.434126 330.308267 288.260793 262.485333 242.999993 173.1584 236.719459 470.357333 54.515726 644.3008 89.877859 799.607467c32.392533 142.267733 164.864 235.451733 306.2784 222.958933-78.813867-9.079467-146.978133-66.4576-165.5808-148.1728-23.552-103.5264 97.8944-219.511467 102.058667-417.621333 30.173867 59.562667 68.3008 104.7552 106.496 142.7456 48.469333-68.061867 102.331733-148.445867 129.706667-258.1504 56.866133 227.566933 227.5328 329.4208 227.5328 455.099733 0 121.105067-94.583467 219.784533-213.879467 226.850133C587.473593 1023.522133 592.354659 1024 597.338126 1024c188.5184 0 341.333333-152.814933 341.333333-341.333333S682.671459 341.333333 597.338126 0zM494.938126 716.8c-25.6 102.4-102.4 148.2752-102.4 204.8s45.8752 102.4 102.4 102.4c56.558933 0 102.4-45.8752 102.4-102.4S520.538126 819.2 494.938126 716.8z" p-id="29590"></path>',
      },
      fire_3: {
        name: "fire",
        svg_path:
          '<path d="M321.003937 1024c-68.251734-142.007125-31.902006-223.378039 20.542716-300.013249 57.43641-83.962752 72.251484-167.061559 72.251485-167.061559s45.149178 58.684332 27.102306 150.486595c79.771014-88.79445 94.810074-230.257609 82.778826-284.430223C703.988001 548.989688 781.039185 821.804637 677.205675 1024c552.349478-312.524467 137.399413-780.111243 65.147928-832.811949 24.094494 52.668708 28.63821 141.847135-19.99875 185.10843C640.023999 64.027998 436.388726 0.031998 436.388726 0.031998c24.094494 161.045935-87.290544 337.130929-194.675833 468.706706-3.775764-64.219986-7.775514-108.537216-41.533404-169.973377-7.583526 116.664708-96.729954 211.730767-120.856447 328.619461-32.701956 158.262109 24.47847 274.158865 241.744891 396.583214z" p-id="29528"></path>',
      },
      fire_4: {
        name: "fire",
        svg_path:
          '<path d="M559.99946 47.72122c0-47.599941-61.299923-65.539918-88.29989-26.079967C223.99988 383.7008 575.99944 400.00078 575.99944 576.00056c0 71.259911-58.219927 128.919839-129.699838 127.97984-70.339912-0.899999-126.299842-59.539926-126.299842-129.879838v-171.019786c0-43.399946-52.939934-64.459919-82.859896-32.999959C183.599931 426.320747 128 522.660627 128 640.00048c0 211.739735 172.259785 383.99952 383.99952 383.99952s383.99952-172.259785 383.99952-383.99952c0-340.579574-335.99958-385.999518-335.99958-592.27926z" p-id="29466"></path>',
      },

      gift_0: {
        name: "gift",
        svg_path:
          '<path d="M480.79872 959.04768H172.71296a18.7392 18.7392 0 0 1-18.72896-18.72896V533.0944a18.7392 18.7392 0 0 1 18.72896-18.72896h308.09088a18.7392 18.7392 0 0 1 18.72896 18.72896v407.33696c0 10.21952-8.3968 18.6112-18.73408 18.6112z m370.9696 0h-304.55808a18.7392 18.7392 0 0 1-18.72896-18.72896V533.0944a18.7392 18.7392 0 0 1 18.72896-18.72896h304.55808a18.7392 18.7392 0 0 1 18.72896 18.72896v407.33696c0 10.21952-8.39168 18.6112-18.72896 18.6112z m45.0048-628.45952h-278.04672c36.2496-20.55168 71.40352-42.32704 77.83936-46.45888 0.85504-0.49152 1.5872-1.09568 2.31936-1.70496 25.2928-21.77024 38.67136-45.24544 40.13056-69.81632 1.22368-22.3744-7.90016-44.88192-26.50624-65.07008-11.91936-12.89216-33.21344-20.43392-44.75904-23.71584-15.3344-4.38272-49.63328-0.36864-60.09344 4.2496-49.2544 22.13888-77.95712 76.8768-94.38208 125.04064-17.6384-46.45888-45.0048-90.61376-64.4608-119.07584-12.89728-18.97472-43.0592-45.9776-54.3744-52.3008-31.2576-17.5104-59.9552-20.92032-85.13536-10.09664-42.44992 18.00192-56.43776 69.81632-57.28768 73.46688-15.44704 86.72256 77.2352 150.08768 148.6336 185.48736H127.22176a18.7392 18.7392 0 0 0-18.73408 18.72896V477.0304a18.7392 18.7392 0 0 0 18.73408 18.72896H896.768a18.7392 18.7392 0 0 0 18.7392-18.72896V349.31712c-0.128-10.33728-8.3968-18.72896-18.7392-18.72896z m-608.512-177.4592c0.12288-0.3584 10.09664-36.36224 35.51744-47.06816 4.74112-2.06848 9.97376-3.04128 15.5648-3.04128 10.8288 0 23.11168 3.76832 36.736 11.43296 6.07744 3.4048 31.86688 26.27072 41.71776 40.86784 22.25664 32.47616 72.12544 111.77984 75.40736 173.68576-1.09568-0.73216-2.432-1.21344-3.76832-1.69984-60.93824-19.82976-216.0128-89.64096-201.17504-174.17216z m334.2336 9.3696c4.5056-1.5872 18.73408-3.16416 27.9808-3.16416 2.9184 0 5.47328 0.12288 6.93248 0.4864 14.35136 4.13696 24.32512 9.61024 27.61216 13.13792 11.79136 12.76928 17.38752 25.4208 16.65536 37.5808-0.72704 13.74208-9.60512 28.09856-26.14784 42.69056-30.88896 19.34336-111.4112 67.87072-140.35968 77.35808h-2.9184c7.66464-47.43168 33.93536-142.7968 90.25024-168.0896z"></path>',
      },
      gift_1: {
        name: "gift",
        svg_path:
          '<path d="M474.18097 127.290893l-134.35708 0q-13.933327 0-21.397609-6.469045t-10.449995-16.421421-2.985713-22.392847 1.990475-23.388084q0.995238-10.947614 3.980951-23.885703t8.45952-21.895228 14.430946-11.942852 21.895228 4.976188q14.928564 8.957139 33.83808 19.407134t36.823792 20.89999 33.340461 18.909515 23.388084 13.435708q9.952376 6.966663 14.928564 15.426183t3.980951 15.923802-7.961901 12.44047-19.904753 4.976188zM551.809505 126.295656l133.361843 0q13.933327 0 21.397609-6.469045t10.449995-16.421421 2.985713-22.392847-0.995238-23.388084q-1.990475-10.947614-4.478569-23.388084t-7.961901-21.397609-14.430946-11.942852-21.895228 3.980951q-14.928564 8.957139-33.83808 19.407134t-37.321411 20.89999-33.83808 18.909515-22.392847 13.435708q-10.947614 6.966663-15.923802 15.426183t-3.980951 15.923802 7.961901 12.44047 20.89999 4.976188zM460.247643 191.981339l-288.618913 0q-31.847604 0-41.302362 10.449995t-9.454758 33.340461l0 87.580912q0 24.880941 10.449995 36.823792t41.302362 11.942852l287.623676 0 0-180.138011zM568.728545 191.981339l284.637963 0q31.847604 0 43.292837 12.44047t11.445233 35.330936l0 85.590436q0 23.885703-10.449995 35.330936t-41.302362 11.445233l-287.623676 0 0-180.138011zM460.247643 424.866945l-305.537953 0 0 163.218972 0 64.690446 0 60.709496 0 51.752357 0 35.828555q0 50.757119 28.861891 78.623773t89.571387 27.866654l187.104675 0 0-482.690252zM568.728545 424.866945l304.542716 0 0 373.214112q-0.995238 50.757119-28.861891 80.116629t-88.576149 29.35951l-187.104675 0 0-482.690252z" p-id="459"></path>',
      },
      gift_2: {
        name: "gift",
        svg_path:
          '<path d="M848.794624 939.156685 571.780416 939.156685 571.780416 653.17123l341.897539 0 0 221.100654C913.677926 909.960704 884.482867 939.156685 848.794624 939.156685zM571.780403 318.743552c-11.861606-3.210138-31.443354-8.36864-39.829709-16.176435-0.596582-0.561766-1.016218-1.246413-1.613824-1.841971-0.560845 0.596582-1.016218 1.280205-1.613824 1.841971-8.386355 7.807795-15.96631 12.965274-27.827917 16.176435l0 263.544325L141.030675 582.287877 141.030675 355.202884c0-35.687834 29.195059-64.882688 64.883302-64.882688l150.649125 0c-16.984474-9.525965-32.846438-20.56233-46.111027-32.932045-60.250624-56.144691-71.129907-137.062605-24.283034-180.767027 19.615539-18.264986 46.252237-27.124736 75.026739-27.124736 39.933133 0 83.972915 17.070797 118.995968 49.706086 20.353331 18.983322 37.722624 43.405619 50.145075 69.056819 12.457267-25.6512 29.791744-50.074419 50.180915-69.056819 35.022029-32.63529 79.062835-49.706086 118.994944-49.706086 28.74071 0 55.410176 8.860774 75.025715 27.124736 46.882611 43.704422 35.96759 124.622336-24.283034 180.767027-13.264589 12.368691-29.127578 23.40608-46.111027 32.932045l144.649234 0c35.688243 0 64.882278 29.195981 64.882278 64.882688l0 227.084948L571.780416 582.287833 571.780416 318.743508zM435.064218 147.625267c-21.476966-19.965747-49.094144-31.913882-73.868288-31.913882-7.404954 0-21.125018 1.211597-29.863322 9.386803-2.000691 1.824563-8.070144 7.439462-8.070144 21.369754 0 15.650406 8.492749 40.24873 32.319386 62.477926 29.124506 27.12576 77.202432 47.601152 111.76704 47.601152 12.176794 0 16.492237-2.666701 16.527053-2.702541C489.524736 242.54505 475.664486 185.453773 435.064218 147.625267zM577.78135 254.790963c0 0 0.034816-0.034816 0.069632-0.034816 0.807424 0 5.50871 1.790771 15.509914 1.790771 34.564608 0 82.64151-20.47529 111.76704-47.601152 23.826637-22.229299 32.283546-46.810112 32.283546-62.442189 0-13.930291-6.033613-19.562496-8.035328-21.404467-8.77312-8.17623-22.457344-9.386803-29.864346-9.386803-24.808038 0-52.390298 11.948134-73.867264 31.913882C585.325466 185.208218 571.358822 241.73865 577.78135 254.790963zM500.89513 939.156685 205.914017 939.156685c-35.688243 0-64.883302-29.195981-64.883302-64.883712L141.030714 653.17123l359.864462 0L500.895177 939.15666z" p-id="469"></path>',
      },

      letter_0: {
        name: "letter",
        svg_path:
          '<path d="M935.563 231.031a37.473 37.473 0 0 1-12.188 18.844L530.469 579.781c-0.188 0.188-0.375 0.375-0.657 0.469-15.375 12.375-37.78 10.875-51.375-3.094l-327.75-274.312c-16.125-13.5-18.28-37.781-4.78-54 13.5-16.125 37.78-18.281 54-4.781l306 256.218 368.156-309A37.648 37.648 0 0 1 890 183.312c-6.094-1.78-12.469-2.812-19.125-2.812h-732.75c-36.656 0-66.656 30-66.656 66.656v555.469c0 36.656 30 66.656 66.656 66.656h732.75c36.656 0 66.656-30 66.656-66.656V247.156c0-5.531-0.656-10.969-1.968-16.125z" p-id="590"></path>',
      },
      letter_1: {
        name: "letter",
        svg_path:
          '<path d="M914.285714 73.142857h-804.571428C51.2 73.142857 0 124.342857 0 182.857143v585.142857c0 58.514286 51.2 109.714286 109.714286 109.714286h804.571428c58.514286 0 109.714286-51.2 109.714286-109.714286v-585.142857c0-58.514286-51.2-109.714286-109.714286-109.714286z m-804.571428 73.142857h804.571428L563.2 497.371429c-14.628571 14.628571-29.257143 21.942857-51.2 21.942857s-36.571429-7.314286-51.2-21.942857L109.714286 146.285714zM73.142857 782.628571V212.114286l285.257143 285.257143L73.142857 782.628571z m80.457143 21.942858l256-256c29.257143 29.257143 65.828571 43.885714 102.4 43.885714s73.142857-14.628571 102.4-43.885714l43.885714-43.885715-43.885714 43.885715 256 256H153.6z m797.257143-36.571429v14.628571L665.6 497.371429 950.857143 212.114286v555.885714z" p-id="650"></path>',
      },
      letter_2: {
        name: "letter",
        svg_path:
          '<path d="M903.489536 117.798912 125.989888 117.798912c-51.463168 0-93.179904 41.719808-93.179904 93.185024l0 575.474688c0 51.46624 41.716736 93.182976 93.179904 93.182976l777.499648 0c51.468288 0 93.190144-41.716736 93.190144-93.182976L996.67968 210.983936C996.67968 159.517696 954.957824 117.798912 903.489536 117.798912zM904.646656 225.485824 526.856192 610.10432c-3.557376 3.598336-8.38144 5.64224-13.451264 5.64224l-0.04096 0c-5.069824-0.02048-9.894912-2.064384-13.451264-5.6832L124.778496 225.83296c-7.236608-7.441408-7.114752-19.380224 0.326656-26.637312 7.482368-7.277568 19.339264-7.114752 26.657792 0.306176l361.68192 370.471936 364.29824-370.900992c7.277568-7.441408 19.216384-7.523328 26.657792-0.22528C911.802368 206.12608 911.924224 218.064896 904.646656 225.485824z" p-id="661"></path>',
      },
      letter_3: {
        name: "letter",
        svg_path:
          '<path d="M512 562.3l417.3-347.6-6.6-1.4H101.3l-6.5 1.4zM960 250.7c0-3.9-1.1-7.5-2.2-11.1L661.9 486.1l296.3 296.3 1.8-9.1V250.7zM66.3 239.5c-1.2 3.6-2.3 7.2-2.3 11.2v522.7l1.9 9.1 296.3-296.3L66.3 239.5zM633.1 510.1L524 601c-3.4 2.9-7.7 4.3-12 4.3-4.2 0-8.5-1.4-11.9-4.3L391 510.1 92.3 808.8l9 1.9h821.3l9.2-1.9-298.7-298.7z" p-id="671"></path>',
      },
      letter_4: {
        name: "letter",
        svg_path:
          '<path d="M1024.5 240v13.3L570.2 492.9c-36.9 19.5-81 19.7-118.2 0.7L0.5 261.8V240c0-35.3 28.7-64 64-64h896c35.3 0 64 28.7 64 64zM1024.5 325.7V784c0 35.3-28.7 64-64 64h-896c-35.3 0-64-28.7-64-64V333.7l452 232c37.1 19.1 81.2 18.8 118.1-0.7l453.9-239.3z" p-id="681"></path>',
      },

      package_0: {
        name: "package",
        svg_path:
          '<path d="M896 273.371429L513.097143 493.714286 128 275.2 513.097143 54.857143zM906.971429 329.618286v425.545143l-365.714286 220.708571 0.365714-439.588571zM474.368 976.091429L475.428571 535.552 109.714286 329.618286l0.365714 427.885714z"></path>',
      },
      package_1: {
        name: "package",
        svg_path:
          '<path d="M896 320v544c0 17.6-14.4 32-32 32H160c-17.6 0-32-14.4-32-32V320h12.8l360-257.6 37.6 52L251.2 320h447.2l-181.6-65.6 21.6-60L884.8 320h11.2zM768 704H512v64h256v-64z m0-128H576v64h192v-64z" p-id="479"></path>',
      },
      package_2: {
        name: "package",
        svg_path:
          '<path d="M146.285714 333.116952l343.28381 151.625143-1.852953 429.689905a73.216 73.216 0 0 1-2.681904-1.145905L189.732571 782.165333A73.142857 73.142857 0 0 1 146.285714 715.312762V333.116952zM899.437714 648.533333l51.321905 52.102096-198.948571 195.974095-120.588191-118.979048 51.370667-52.077714 69.266286 68.339809 147.577904-145.359238z m-16.310857-311.369143v258.901334l-106.691047 105.057524-24.600381 24.234666-69.729524-68.803047-119.881143 121.465904-0.780191 0.804572 1.243429-292.108191 320.438857-149.552762zM544.402286 110.689524l295.253333 131.120762c11.239619 4.998095 20.796952 12.580571 28.038095 21.894095l-339.431619 158.98819-364.324571-161.694476a73.045333 73.045333 0 0 1 25.795047-19.187809l295.302096-131.120762a73.142857 73.142857 0 0 1 59.367619 0z" p-id="489"></path>',
      },
      package_3: {
        name: "package",
        svg_path:
          '<path d="M695.717647 48.188235C689.694118 37.647059 677.647059 30.117647 664.094118 30.117647H143.058824c-13.552941 0-24.094118 7.529412-30.117648 18.070588L30.117647 212.329412v531.57647c0 19.576471 15.058824 34.635294 34.635294 34.635294h498.447059v-195.764705c0-25.6 19.576471-46.682353 43.670588-49.694118 4.517647 0 9.035294-4.517647 9.035294-9.035294 1.505882-25.6 22.588235-45.176471 48.188236-45.176471h111.435294V212.329412L695.717647 48.188235z m-531.576471 140.047059H67.764706l66.258823-129.505882c1.505882-3.011765 6.023529-4.517647 9.035295-4.517647h21.082352v134.023529z m364.42353 140.047059c-4.517647 4.517647-12.047059 7.529412-19.576471 7.529412h-210.823529c-15.058824 0-27.105882-12.047059-27.105882-27.105883 0-7.529412 3.011765-13.552941 7.529411-19.57647 4.517647-4.517647 12.047059-7.529412 18.070589-7.529412h212.329411c15.058824 0 27.105882 12.047059 27.105883 27.105882 0 7.529412-3.011765 13.552941-7.529412 19.576471z m93.364706-140.047059h-436.705883V54.211765h436.705883v134.023529z m21.082353 0V54.211765h21.082353c4.517647 0 7.529412 1.505882 9.035294 6.023529l66.258823 129.505882h-96.37647zM975.811765 561.694118c-19.576471-1.505882-34.635294-16.564706-36.141177-36.141177-1.505882-10.541176-9.035294-18.070588-19.57647-18.070588H667.105882c-10.541176 0-18.070588 7.529412-19.57647 18.070588-1.505882 19.576471-16.564706 34.635294-36.141177 36.141177-10.541176 1.505882-18.070588 9.035294-18.070588 19.57647V813.176471c0 6.023529 3.011765 10.541176 6.023529 15.058823l180.705883 161.129412c3.011765 3.011765 7.529412 4.517647 12.047059 4.517647 4.517647 0 9.035294-1.505882 13.552941-4.517647l180.705882-161.129412c4.517647-3.011765 6.023529-9.035294 6.02353-15.058823V581.270588c1.505882-9.035294-6.023529-18.070588-16.564706-19.57647zM793.6 861.364706c-72.282353 0-129.505882-58.729412-129.505882-129.505882 0-72.282353 58.729412-129.505882 129.505882-129.505883s129.505882 58.729412 129.505882 129.505883c0 70.776471-57.223529 129.505882-129.505882 129.505882zM891.482353 668.611765c-3.011765 3.011765-121.976471 129.505882-126.494118 126.494117l-67.764706-67.764706v-1.505882h1.505883c27.105882 9.035294 46.682353 25.6 64.752941 43.670588 25.6-30.117647 60.235294-63.247059 94.870588-87.341176 15.058824-10.541176 16.564706-7.529412 31.62353-15.058824 0-1.505882 1.505882 0 1.505882 1.505883z" p-id="550"></path>',
      },

      plane_0: {
        name: "plane",
        svg_path:
          '<path d="M908.647297 65.629743c10.293437 7.487531 14.502295 17.464767 12.631692 29.939893L801.524534 814.106596c-1.558495 9.046027-6.551206 16.060791-14.969946 21.049409-4.365424 2.494821-9.201569 3.745301-14.502295 3.745301-3.430122 0-7.17133-0.783853-11.228739-2.342348l-211.912387-86.541005L435.706895 888.020002c-5.615904 7.17133-13.254885 10.756995-22.924105 10.756995-4.053316 0-7.483438-0.623193-10.293437-1.870604-5.92392-2.182712-10.680247-5.848195-14.265912-10.992355s-5.380544-10.836813-5.380544-17.076934L382.842897 705.575764 787.022239 210.17993 286.943756 642.894166l-184.7784-75.785034c-11.539824-4.365424-17.775852-12.942777-18.711154-25.731034-0.624217-12.472056 4.364401-21.672602 14.969946-27.596522l778.412652-449.088158c4.680603-2.805906 9.66922-4.208858 14.969946-4.208858C898.046868 60.485583 903.658679 62.200644 908.647297 65.629743L908.647297 65.629743zM908.647297 65.629743"></path>',
      },
      plane_1: {
        name: "plane",
        svg_path:
          '<path d="M592.895494 660.482272 818.174086 1011.20008C827.326029 1019.20003 838.781958 1023.680002 850.813882 1023.936 863.9338 1024.064 876.157724 1019.20003 884.79767 1010.688083 909.693514 973.504316 848.893894 734.46581 765.694414 487.683352L592.895494 660.482272 592.895494 660.482272Z" p-id="60700"></path><path d="M999.228955 26.886232C961.853188-10.617534 914.237486-6.713558 882.237686 25.158243L621.119318 285.252617C465.152293 235.588928 182.978056 139.653527 76.482722 139.653527 61.634815 139.653527 55.106856 141.317517 52.86687 142.021512 36.098974 160.261398 35.714977 188.229224 51.970875 206.789108L442.816432 462.787508 248.769645 656.0663C248.769645 656.0663 99.074581 625.218492 77.186718 622.33851 46.658908 618.370535 11.459128 645.122368 77.058718 678.594159 153.66624 717.569915 243.393679 762.881632 243.393679 762.881632 243.393679 762.881632 298.625334 870.33696 332.353123 929.53659 375.296854 1001.152143 400.512697 966.40036 395.392729 929.53659 390.33676 892.80082 373.120868 768.577596 373.120868 768.577596L557.695714 577.090793 738.750583 396.675921 996.412972 139.973525C1028.476772 108.101724 1036.476722 64.261998 999.228955 26.886232L999.228955 26.886232Z"></path>',
      },
      plane_2: {
        name: "plane",
        svg_path:
          '<path d="M509.34272 976.75776c-74.3424-25.76384-50.41152-146.50368-50.15552-147.73248 5.33504-21.77024 2.87744-39.74144-7.35232-53.23264-16.9472-22.37952-48.80896-23.71072-50.15552-23.7568-138.26048-6.81984-153.78432-171.55584-153.92256-173.21984-1.30048-19.2256-28.35968-28.60544-82.71872-28.60544-28.6464 0-54.64064 2.80576-54.90176 2.83648-1.1008 0.08704-2.3552 0.13312-3.6352 0.13312-23.67488 0-54.40512-16.06144-61.55264-19.98336-25.2928-75.23328 184.25856-234.9312 195.584-243.48672 43.96544-18.78528 101.61152-22.73792 142.30528-22.73792 28.82048 0 49.2288 2.01728 49.42848 2.03776l2.24256 0.22528 1.63328-1.5616C645.61152 67.712 935.97184 44.13952 976.2304 41.80992c20.6336 290.96448-220.12416 550.43072-222.57664 553.03168l-1.82784 1.95072 0.64512 2.60096c24.448 98.30912-9.08288 191.70816-99.67616 277.61664-62.32576 59.1104-131.70176 94.04416-143.45216 99.74784z m-198.05696-403.69664c0.16896 1.60768 3.75296 34.04288 19.85536 64.75776 22.31808 42.56256 50.9952 49.34144 73.48224 50.49344 10.56256 0.46592 64.77312 5.01248 98.06336 48.95744 15.13472 19.98848 30.70464 54.45632 18.88256 105.15456-2.7136 14.55104-3.32288 32.1536-1.6896 47.32928l0.83968 7.81824 6.656-4.1984c75.04384-47.36512 196.03456-146.5344 163.18976-278.58432l-9.04704-36.37248 25.69728-27.29472c1.83808-1.95584 184.4992-198.27712 204.6976-431.616l0.54272-6.29248-6.23616 1.02912c-97.9968 16.19968-283.648 63.66208-426.0352 199.58272l-22.88128 21.72416-31.3344-3.05152c-0.1792-0.02048-18.01216-1.72544-43.14112-1.72544-44.3136 0-83.29728 5.21728-109.76256 14.68416l-0.7424 0.26112-0.62464 0.4864c-13.06624 10.16832-47.14496 37.2992-81.24928 69.54496-24.59648 23.26016-44.51328 44.64128-59.19744 63.54944l-6.55872 8.448 10.68544-0.54272c10.3424-0.52224 20.31616-0.78336 29.64992-0.78336 27.35104 0 49.57184 2.14528 67.93728 6.56384 65.56672 15.77472 76.61056 61.2608 78.32064 80.0768zM734.41792 198.6304c-46.6688 0-84.47488 37.28384-84.47488 83.25632 0 45.99296 37.80608 83.25632 84.47488 83.25632 46.65344 0 84.45952-37.26336 84.45952-83.25632 0.00512-45.97248-37.80096-83.25632-84.45952-83.25632z m-0.00512 117.43744c-19.15392 0-34.67264-15.29856-34.67264-34.176 0-18.87232 15.51872-34.176 34.67264-34.176 19.1488 0 34.67264 15.30368 34.67264 34.176 0.00512 18.87744-15.51872 34.176-34.67264 34.176zM319.79008 801.96096c-98.54976-7.12192-115.37408-118.45632-115.37408-118.45632-31.2576-71.0912-98.56 26.04544-98.55488 26.0352-50.47296 42.66496 9.61024 56.89856 9.61024 56.89856 43.264 2.3296 9.62048 80.53248 9.62048 80.53248-43.264 71.06048 9.62048 52.11136 9.62048 52.11136 91.33568-40.25856 117.76512 9.47712 117.76512 9.47712-4.79744 71.08608 91.33568-33.16224 91.33568-33.16224 52.8896-45.01504-24.02304-73.43616-24.02304-73.43616z m-37.68832 65.1008c-17.07008-17.53088-45.20448-32.77312-83.68128-32.77312-5.70368 0-11.54048 0.3328-17.50016 1.00352 3.90144-14.7968-3.5072-48.90112-7.41888-70.28736l-0.00512-0.01536c-3.53792-18.92864-16.65024-34.28864-16.65024-34.28864l7.48544-6.32832c1.34144 3.90656 2.84672 7.89504 4.48512 11.92448 4.16256 10.3936 18.47296 28.49792 21.14048 31.83104 26.00448 32.19968 62.36672 73.24672 111.08864 81.024a372.30592 372.30592 0 0 1-18.944 17.90976z" p-id="418"></path>',
      },
      plane_3: {
        name: "plane",
        svg_path:
          '<path d="M0 1024l106.496-474.112 588.8-36.864-588.8-39.936-106.496-473.088 1024 512z" p-id="428"></path>',
      },

      postalman_0: {
        name: "postal man",
        svg_path:
          '<path d="M895.2 767.2V864c0 17.6-14.4 32-32 32h-160V720c0-8.8-7.2-16-16-16h-352c-8.8 0-16 7.2-16 16v176H160.8c-17.6 0-32-14.4-32-32V768c0-128 256-192 383.2-192s383.2 64 383.2 191.2z m-384 128.8h128v-32h-128v32z m64-64h64v-32h-64v32z m-288-544c0 124 100 224 224 224s224-100 224-224-100-224-224-224c-101.6 0-187.2 67.2-214.4 160H191.2v32h98.4c-1.6 10.4-2.4 20.8-2.4 32z" p-id="580"></path>',
      },

      ship_0: {
        name: "ship",
        svg_path:
          '<path d="M384 170.666667h232.362667a42.666667 42.666667 0 0 1 36.181333 20.053333L800 426.666667h188.074667a21.333333 21.333333 0 0 1 18.730666 31.573333l-167.978666 307.925333A212.992 212.992 0 0 1 640 682.666667a212.992 212.992 0 0 1-170.666667 85.333333 212.992 212.992 0 0 1-170.666666-85.333333 212.992 212.992 0 0 1-194.133334 84.053333l-52.736-289.749333A42.666667 42.666667 0 0 1 93.781333 426.666667H128V213.333333a42.666667 42.666667 0 0 1 42.666667-42.666666h42.666666V42.666667h170.666667v128z m-170.666667 256h486.058667l-106.666667-170.666667H213.333333v170.666667zM128 853.333333a255.061333 255.061333 0 0 0 170.666667-65.194666A255.061333 255.061333 0 0 0 469.333333 853.333333a255.061333 255.061333 0 0 0 170.666667-65.194666A255.061333 255.061333 0 0 0 810.666667 853.333333h85.333333v85.333334h-85.333333a339.754667 339.754667 0 0 1-170.666667-45.653334A339.754667 339.754667 0 0 1 469.333333 938.666667a339.754667 339.754667 0 0 1-170.666666-45.653334A339.754667 339.754667 0 0 1 128 938.666667H42.666667v-85.333334h85.333333z"></path>',
      },
      ship_1: {
        name: "ship",
        svg_path:
          '<path d="M972.8 1024c-35.84 0-66.56-30.72-97.28-56.32-15.36-20.48-40.96-46.08-56.32-46.08-15.36 0-35.84 20.48-56.32 40.96-25.6 30.72-56.32 61.44-97.28 61.44-40.96 0-66.56-30.72-97.28-61.44-20.48-20.48-40.96-40.96-56.32-40.96-20.48 0-40.96 25.6-61.44 46.08-25.6 25.6-56.32 56.32-92.16 56.32s-66.56-30.72-97.28-56.32c-15.36-20.48-40.96-46.08-56.32-46.08s-40.96 25.6-56.32 46.08C117.76 993.28 87.04 1024 51.2 1024c-15.36 0-25.6-10.24-25.6-25.6s10.24-25.6 25.6-25.6 40.96-25.6 56.32-46.08C138.24 901.12 168.96 870.4 204.8 870.4s66.56 30.72 97.28 56.32c15.36 20.48 40.96 46.08 56.32 46.08 15.36 0 35.84-20.48 56.32-40.96 25.6-30.72 56.32-61.44 97.28-61.44 40.96 0 66.56 30.72 97.28 61.44 20.48 20.48 40.96 40.96 56.32 40.96 20.48 0 40.96-25.6 61.44-46.08 25.6-25.6 56.32-56.32 92.16-56.32s66.56 30.72 97.28 56.32c20.48 20.48 46.08 46.08 56.32 46.08 15.36 0 25.6 10.24 25.6 25.6s-10.24 25.6-25.6 25.6zM972.8 819.2c-15.36 0-40.96-25.6-56.32-46.08-20.48-20.48-46.08-46.08-66.56-51.2 5.12-40.96 10.24-133.12 51.2-281.6v-5.12c0-25.6-20.48-46.08-71.68-66.56l-30.72-15.36V256c0-20.48-20.48-35.84-56.32-51.2-20.48-10.24-51.2-20.48-92.16-35.84-46.08-15.36-87.04-25.6-112.64-35.84V25.6c0-15.36-10.24-25.6-25.6-25.6s-25.6 10.24-25.6 25.6v107.52c-25.6 10.24-66.56 20.48-112.64 35.84-35.84 15.36-66.56 25.6-87.04 35.84-35.84 10.24-56.32 20.48-56.32 46.08v102.4l-30.72 15.36c-51.2 20.48-71.68 40.96-71.68 66.56v5.12c35.84 148.48 46.08 240.64 51.2 281.6-25.6 10.24-46.08 30.72-66.56 51.2s-46.08 46.08-61.44 46.08c-15.36 0-25.6 10.24-25.6 25.6s10.24 25.6 25.6 25.6c35.84 0 66.56-30.72 97.28-56.32 15.36-20.48 40.96-46.08 56.32-46.08s40.96 25.6 56.32 46.08c30.72 25.6 61.44 56.32 97.28 56.32s66.56-30.72 92.16-56.32c20.48-20.48 40.96-46.08 61.44-46.08 15.36 0 35.84 20.48 56.32 40.96 25.6 25.6 56.32 61.44 97.28 61.44 40.96 0 71.68-30.72 97.28-61.44 20.48-20.48 40.96-40.96 56.32-40.96 15.36 0 40.96 25.6 56.32 46.08 30.72 30.72 56.32 56.32 97.28 56.32 15.36 0 25.6-10.24 25.6-25.6s-10.24-25.6-25.6-25.6z" p-id="438"></path><path d="M619.52 215.04c87.04 30.72 112.64 46.08 122.88 51.2v66.56c-15.36-5.12-25.6-10.24-40.96-15.36-66.56-25.6-133.12-40.96-163.84-51.2V189.44c20.48 5.12 51.2 15.36 81.92 25.6zM281.6 261.12c25.6-15.36 117.76-46.08 204.8-71.68v76.8c-30.72 10.24-97.28 30.72-163.84 51.2-15.36 5.12-25.6 10.24-40.96 15.36V261.12zM665.6 824.32c-20.48 0-40.96-20.48-61.44-46.08-25.6-25.6-56.32-56.32-92.16-56.32s-66.56 30.72-92.16 61.44c-20.48 20.48-40.96 40.96-61.44 40.96-15.36 0-35.84-20.48-61.44-46.08-20.48-20.48-46.08-46.08-66.56-51.2h-5.12v-5.12c0-40.96-10.24-133.12-51.2-281.6v-5.12l5.12-5.12c5.12-5.12 25.6-20.48 81.92-40.96h5.12c25.6-10.24 56.32-20.48 87.04-35.84 71.68-25.6 138.24-46.08 158.72-51.2 25.6 5.12 92.16 25.6 158.72 51.2 35.84 10.24 61.44 25.6 87.04 35.84 61.44 20.48 81.92 35.84 92.16 46.08l5.12 5.12v5.12c-35.84 148.48-46.08 240.64-51.2 281.6v5.12h-5.12c-25.6 10.24-46.08 30.72-66.56 51.2-25.6 20.48-46.08 40.96-66.56 40.96z m-153.6-112.64c40.96 0 71.68 30.72 102.4 61.44 20.48 20.48 40.96 40.96 51.2 40.96 15.36 0 40.96-25.6 56.32-40.96 20.48-20.48 40.96-40.96 61.44-51.2 5.12-46.08 15.36-133.12 46.08-276.48-10.24-5.12-30.72-20.48-81.92-40.96-25.6-10.24-56.32-20.48-87.04-30.72-66.56-20.48-128-40.96-153.6-51.2-20.48 5.12-87.04 25.6-153.6 51.2-25.6 0-56.32 10.24-81.92 20.48h-5.12c-51.2 20.48-71.68 35.84-81.92 40.96 35.84 143.36 46.08 235.52 46.08 276.48 25.6 10.24 46.08 30.72 66.56 56.32 15.36 15.36 40.96 40.96 56.32 40.96 10.24 0 35.84-20.48 51.2-40.96 30.72-25.6 66.56-56.32 107.52-56.32z m215.04 61.44z" fill="#FFFFFF" p-id="439"></path>',
      },
      ship_2: {
        name: "ship",
        svg_path:
          '<path d="M949.764 957.162l-76.022-66.838c-19.898-18.878-45.92-29.593-73.47-29.593h-1.021c-28.572 0-55.104 11.225-75.002 31.634l-43.878 44.388c-6.633 6.633-15.307 10.205-24.49 10.205-9.184 0-17.858-3.572-24.49-10.205l-45.41-45.409c-19.898-19.898-46.43-30.613-75.001-31.123-28.062 0-54.593 10.715-75.002 30.613l-46.94 46.43c-13.265 13.265-35.204 13.265-48.47 0l-46.94-46.43c-19.898-19.898-46.43-30.613-75.001-30.613-28.062 0-54.083 10.715-73.981 30.103l-73.981 66.328c-14.797 13.265-15.817 36.225-2.551 51.021 13.265 14.796 36.225 15.817 51.021 2.551l75.002-66.838c0.51-0.51 1.02-1.02 1.53-1.02 13.266-13.266 35.205-13.266 48.47 0l46.94 46.43c19.899 19.898 46.43 30.612 75.002 30.612 28.062 0 54.593-10.714 75.001-30.613l46.94-46.43c13.266-13.265 35.205-13.265 48.47 0l45.41 45.41c19.898 19.898 46.94 31.123 75 31.123h0.511c28.572 0 55.103-11.225 75.512-31.633l43.878-44.39c13.266-13.265 35.205-13.775 48.47-0.51l1.531 1.531 76.532 67.349c6.633 6.122 15.307 9.184 23.98 9.183 10.205 0 19.899-4.081 27.042-12.245 11.735-14.796 10.714-37.755-4.592-51.021zM963.03 438.784l-127.554-55.103V221.943c0-14.796-9.184-28.062-22.96-33.674l-226.025-87.757V0H439.55v100.512L205.36 190.82c-13.776 5.612-22.96 18.878-22.96 33.674v161.228L59.44 438.784c-18.878 8.164-26.021 31.634-14.286 48.98l189.8 304.599c4.081 6.122 10.204 10.204 17.347 11.224 33.674 6.633 64.797 22.96 89.798 47.45l3.571 3.572c10.715 10.204 27.552 10.204 38.266 0l3.572-3.572c33.164-32.653 77.042-50.51 123.472-50.51h0.51c46.94 0 90.818 18.367 123.982 51.02l1.53 1.531c10.715 10.715 28.062 10.715 38.267 0 26.02-26.02 58.674-43.368 94.9-49.49 7.142-1.021 13.775-5.103 17.857-11.225l189.8-304.598c10.714-17.347 4.081-40.817-14.797-48.98z m-199.494-86.226L537 254.597c-16.326-7.143-35.204-7.143-51.531 0L254.342 354.599V248.985L512 149.493l251.536 97.45v105.615z" p-id="449"></path>',
      },
    };

    return SVG_ICONS[iconName].svg_path;
  }

  // ------------------------------ WIDGET BOX  ------------------------------
  async function createWidgetBox(widgetBoxStyle) {
    const widgetBox = await createElem({
      tag: "div",
      attributes: {
        style: {
          borderWidth: `${widgetBoxStyle.border.width}px`,
          borderRadius: `${widgetBoxStyle.border.radius}px`,
          borderStyle: widgetBoxStyle.border.line,
          borderColor: widgetBoxStyle.color.border_color,
          backgroundColor: widgetBoxStyle.color.background_color,
          margin: `${widgetBoxStyle.other.margin[0]}px ${widgetBoxStyle.other.margin[1]}px ${widgetBoxStyle.other.margin[2]}px ${widgetBoxStyle.other.margin[3]}px`,
          padding: `${widgetBoxStyle.other.padding[0]}px ${widgetBoxStyle.other.padding[1]}px ${widgetBoxStyle.other.padding[2]}px ${widgetBoxStyle.other.padding[3]}px`,
        },
      },
    });

    return widgetBox;
  }

  // ------------------------------ Text Message Widget ------------------------------
  function replacePlaceholders(template, tokenCss, iconCss) {
    function styleObjectToString(styleObj) {
      return Object.entries(styleObj)
        .map(
          ([key, value]) =>
            `${key.replace(/([A-Z])/g, "-$1").toLowerCase()}: ${value}`
        )
        .join("; ");
    }

    return template.replace(/\{([^}]+)\}/g, (match, variableName) => {
      if (variableName === "advanced_country_flag") {
        const htmlString = `<span id="advanced-country-flag" style="display: inline-flex; justify-content: center; align-items: center; cursor: pointer;"><span id="country-flag" class="${match}" style="display: inline-block; margin-right: 2px"></span><span style="padding-left: 2px;"><svg class="icon" style="width: 1em; height: 1em; vertical-align: middle; fill: currentColor; overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5661"><path d="M958.160991 320.247768 511.011998 766.80222 63.791373 320.247768 l65.113997-65.098647 L511.011998 636.748189 l382.034996-381.599068 L958.160991 320.247768" p-id="5662"></path></svg></span></span>`;
        return htmlString;
      }

      if (variableName === "advanced_country_name") {
        const htmlString = `<span id="advanced-country-name" style="display: inline-flex; justify-content: center; align-items: center; cursor: pointer;"><span id="country-name">${match}</span><span style="padding-left: 2px;"><svg class="icon" style="width: 1em; height: 1em; vertical-align: middle; fill: currentColor; overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5661"><path d="M958.160991 320.247768 511.011998 766.80222 63.791373 320.247768 l65.113997-65.098647 L511.011998 636.748189 l382.034996-381.599068 L958.160991 320.247768" p-id="5662"></path></svg></span></span>`;
        return htmlString;
      }

      if (variableName === "country_flag") {
        return `<span class="${match}" style="display: inline-block;"></span>`;
      }

      if (variableName.startsWith("icon_"))
        return `<span style="display: inline-flex;position: relative; top: 3px;"><svg viewBox="0 0 1024 1024" width="${iconCss.fontSize}" height="${iconCss.fontSize}"  style="${styleObjectToString(iconCss)}">${getSVGIconPath(variableName.split("icon_")[1])}</svg></span>`;

      if (variableName === "countdown_time")
        return `<span id="countdown_timer" style="${styleObjectToString(tokenCss)}">${match}</span>`;

      return `<span style="${styleObjectToString(tokenCss)}">${match}</span>`;
    });
  }

  async function replaceTokensTextMessage(config) {
    const widgetMessageTextStyle = config.widget_message_text_appearance;

    const tokenCss = {
      backgroundColor: `${widgetMessageTextStyle.color.token_background_color}`,
      color: `${widgetMessageTextStyle.color.token_color}`,
      fontSize: `${widgetMessageTextStyle.font.token_text_size}px`,
      fontFamily: `${widgetMessageTextStyle.font.token_font_family}`,
    };
    const iconCss = {
      backgroundColor: `${widgetMessageTextStyle.color.icon_background_color}`,
      color: `${widgetMessageTextStyle.color.icon_color}`,
      fontSize: `${widgetMessageTextStyle.font.icon_size}px`,
    };

    const replacedTextMessage = await replacePlaceholders(
      config.widget_message_text_info,
      tokenCss,
      iconCss
    );

    return replacedTextMessage;
  }

  async function updateCountdownTimer(config) {
    setInterval(async () => {
      const countdownElement = document.getElementById("countdown_timer");
      if (countdownElement) {
        countdownElement.innerHTML = toTimeFormat(
          await calculateTimeUntilNextCutoff(config),
          config.time_format,
          config.variable_language_translate
        );
      }
    }, 1000);
  }

  async function updateCountry(countryCode, countryName) {
    // Update the country flag and name in the Widget
    const advancedCountryFlag = document.querySelector(
      "#advanced-country-flag #country-flag"
    );
    const advancedCountryName = document.querySelector(
      "#advanced-country-name #country-name"
    );

    if (advancedCountryFlag) {
      advancedCountryFlag.className = `icon-${countryCode}_f`;
    }
    if (advancedCountryName) {
      advancedCountryName.textContent = countryName;
    }

    // Update the country flag and name in the Modal
    const selectedCountryFlag = document.querySelector(
      ".selected-country .selected-country-flag-and-name span:first-child"
    );
    const selectedCountryName = document.querySelector(
      ".selected-country .selected-country-flag-and-name span:nth-child(2)"
    );

    if (selectedCountryFlag) {
      selectedCountryFlag.className = `icon-${countryCode}_f`;
    }
    if (selectedCountryName) {
      selectedCountryName.textContent = countryName;
    }
  }

  async function renderCountryOptionsList() {
    const ulOptions = document.querySelector(
      ".country-modal-content .country-option-list"
    );

    const countryOptionsList = getCountryList();
    let liHtml = "";

    const searchInput = document.querySelector(".country-search-input");
    searchInput.addEventListener("input", function (event) {
      const searchValue = event.target.value.toLowerCase();
      const countryItems = document.querySelectorAll(".country-item");
      countryItems.forEach((item) => {
        const countryName = item.getAttribute("data-name").toLowerCase();
        if (countryName.includes(searchValue)) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    });

    Object.entries(countryOptionsList).forEach(([key, value]) => {
      liHtml += `<li class="country-item" data-code="${key}" data-name="${value}">`;
      liHtml += `<span class="icon-${key}_f" style="display: inline-block; margin-right: 6px" ></span>`;
      liHtml += `<span>${value}</span>`;
      liHtml += "</li>";
    });

    ulOptions.innerHTML = liHtml;

    ulOptions.addEventListener("click", function (event) {
      const clickedLi = event.target.closest("li");
      if (clickedLi) {
        const countryCode = clickedLi.getAttribute("data-code");
        const countryName = clickedLi.getAttribute("data-name");

        updateCountry(countryCode, countryName);

        const modal = document.getElementById("advanced-country-modal");
        modal.classList.remove("show-modal__country-modal");

        const searchInput = document.querySelector(".country-search-input");
        searchInput.value = "";
        const countryItems = document.querySelectorAll(".country-item");
        countryItems.forEach((item) => {
          item.style.display = "flex";
        });
      }
    });
  }

  async function updateAdvancedCountryModal() {
    const advancedCountryFlag = document.getElementById(
      "advanced-country-flag"
    );
    const advancedCountryName = document.getElementById(
      "advanced-country-name"
    );

    if (advancedCountryFlag || advancedCountryName) {
      renderCountryOptionsList();

      // Add event listener to open the modal
      if (advancedCountryFlag) {
        advancedCountryFlag.addEventListener("click", async () => {
          const modal = document.getElementById("advanced-country-modal");
          if (modal) {
            modal.classList.add("show-modal__country-modal");
          }
        });
      }

      if (advancedCountryName) {
        advancedCountryName.addEventListener("click", async () => {
          const modal = document.getElementById("advanced-country-modal");
          if (modal) {
            modal.classList.add("show-modal__country-modal");
          }
        });
      }

      // Add event listener to close the modal
      window.addEventListener("click", (e) => {
        const modal = document.getElementById("advanced-country-modal");
        const modalContent = modal.querySelector(".country-modal-body"); // The first div inside the modal

        // Check if the click is outside the modal container
        if (
          modal &&
          !modalContent.contains(e.target) &&
          !(advancedCountryFlag && advancedCountryFlag.contains(e.target)) &&
          !(advancedCountryName && advancedCountryName.contains(e.target))
        ) {
          modal.classList.remove("show-modal__country-modal");
        }
      });

      // Add event listener to open the country options list
      document
        .querySelector(".selected-country")
        .addEventListener("click", function () {
          const contrySelect = document.querySelector(".country-modal-content");
          contrySelect.classList.toggle("active");
        });
    }
  }

  async function createTextWidget(config, userLocationData) {
    const widgetMessageTextStyle = config.widget_message_text_appearance;

    const textMessageWidget = await createElem({
      tag: "div",
      attributes: {
        className: "text-message-widget",
        style: {
          borderWidth: `${widgetMessageTextStyle.border.width}px`,
          borderRadius: `${widgetMessageTextStyle.border.radius}px`,
          borderStyle: `${widgetMessageTextStyle.border.line}`,
          borderColor: `${widgetMessageTextStyle.color.border_color}`,
          backgroundColor: `${widgetMessageTextStyle.color.background_color}`,
          color: `${widgetMessageTextStyle.color.text_color}`,
          fontSize: `${widgetMessageTextStyle.font.text_size}px`,
          fontFamily: `${widgetMessageTextStyle.font.text_font_family}`,
          margin: `${widgetMessageTextStyle.other.margin[0]}px ${widgetMessageTextStyle.other.margin[1]}px ${widgetMessageTextStyle.other.margin[2]}px ${widgetMessageTextStyle.other.margin[3]}px`,
          padding: `${widgetMessageTextStyle.other.padding[0]}px ${widgetMessageTextStyle.other.padding[1]}px ${widgetMessageTextStyle.other.padding[2]}px ${widgetMessageTextStyle.other.padding[3]}px`,
        },
      },
    });

    const spanWrapper = await createElem({
      tag: "span",
      attributes: {
        style: {
          whiteSpace: "break-spaces",
          lineHeight: "1.2",
          wordWrap: "breakWord",
          maxWidth: "100%",
          margin: "0",
        },
      },
    });

    textMessageWidget.appendChild(spanWrapper);

    const textMessage = await replaceTokensTextMessage(config);

    const tokenValues = await getTokensValue(config, userLocationData);
    const parsedTextMessage = replaceTokenPlaceholders(
      textMessage,
      tokenValues
    );

    spanWrapper.innerHTML = parsedTextMessage.replace(/&nbsp;/g, "");

    updateCountdownTimer(config);

    return textMessageWidget;
  }

  // ------------------------------ Progress Bar Widget ------------------------------
  async function createBasicProgressBarHtml(config, userLocationData) {
    const widgetProgressBarStyle = config.widget_progress_bar_appearance;
    const lastActiveStepIndex = config.widget_progress_bar_info.findLastIndex(
      (step) => step.status
    );

    const tokenValues = await getTokensValue(config, userLocationData);

    let stepsHtml = "";
    await config.widget_progress_bar_info.forEach((step, index) => {
      const formattedDescription = replaceTokenPlaceholders(
        step?.date_description || "",
        tokenValues
      );

      stepsHtml +=
        '<div key="progress-bar-step-' +
        index +
        '" style="width: ' +
        100 / config.widget_progress_bar_info.length +
        "%; background-color: " +
        widgetProgressBarStyle.color.basic.background_color +
        "; border-right: " +
        (index === config.widget_progress_bar_info.length - 1
          ? ""
          : widgetProgressBarStyle.border.width +
            "px " +
            widgetProgressBarStyle.border.line +
            " " +
            widgetProgressBarStyle.color.basic.border_color) +
        ';" class="progress-bar-step-box">';
      stepsHtml +=
        '<div style="display: flex; border-radius: 50%; justify-content: center; align-items: center; width: ' +
        (widgetProgressBarStyle.font.icon_size + 12) +
        "px; height: " +
        (widgetProgressBarStyle.font.icon_size + 12) +
        "px; background-color: " +
        widgetProgressBarStyle.color.basic.icon_background_color +
        ';">';
      stepsHtml +=
        '<svg viewBox="0 0 1024 1024" width="' +
        widgetProgressBarStyle.font.icon_size +
        '" height="' +
        widgetProgressBarStyle.font.icon_size +
        '" fill="' +
        widgetProgressBarStyle.color.basic.icon_color +
        '">';
      stepsHtml += getSVGIconPath(step.svg.split("icon_")[1]);
      stepsHtml += "</svg>";
      stepsHtml += "</div>";
      stepsHtml += '<div style="text-align: center; margin-top: 4px;">';
      stepsHtml +=
        '<div style="font-weight: 700; background-color: ' +
        widgetProgressBarStyle.color.basic.status_title_background_color +
        "; color: " +
        widgetProgressBarStyle.color.basic.status_title_color +
        "; font-size: " +
        widgetProgressBarStyle.font.status_title_text_size +
        "px; font-family: " +
        widgetProgressBarStyle.font.status_title_font_family +
        ';">';
      stepsHtml += step.title;
      stepsHtml += "</div>";
      stepsHtml +=
        '<div style="margin-top: 1px; font-weight: 400; background-color: ' +
        widgetProgressBarStyle.color.basic.date_title_background_color +
        "; color: " +
        widgetProgressBarStyle.color.basic.date_title_color +
        "; font-size: " +
        widgetProgressBarStyle.font.date_title_text_size +
        "px; font-family: " +
        widgetProgressBarStyle.font.date_title_font_family +
        ';">';
      stepsHtml += formattedDescription;
      stepsHtml += "</div>";
      stepsHtml += "</div>";
      stepsHtml +=
        index < lastActiveStepIndex
          ? '<span style="background-color: ' +
            widgetProgressBarStyle.color.basic.background_color +
            "; border-width: 0 " +
            widgetProgressBarStyle.border.width +
            "px " +
            widgetProgressBarStyle.border.width +
            "px 0; border-style: " +
            widgetProgressBarStyle.border.line +
            "; border-color: " +
            widgetProgressBarStyle.color.basic.border_color +
            ';" class="progress-bar-step-box-after"></span>'
          : "";
      stepsHtml += "</div>";
    });

    return stepsHtml;
  }

  async function createBasicProgressBarWidget(config, userLocationData) {
    const widgetProgressBarStyle = config.widget_progress_bar_appearance;
    const progressBarWidgetBox = await createElem({
      tag: "div",
      attributes: {
        style: {
          margin: `${widgetProgressBarStyle.other.margin[0]}px ${widgetProgressBarStyle.other.margin[1]}px ${widgetProgressBarStyle.other.margin[2]}px ${widgetProgressBarStyle.other.margin[3]}px`,
          padding: `${widgetProgressBarStyle.other.padding[0]}px ${widgetProgressBarStyle.other.padding[1]}px ${widgetProgressBarStyle.other.padding[2]}px ${widgetProgressBarStyle.other.padding[3]}px`,
        },
      },
    });

    const progressBarContainer = await createElem({
      tag: "div",
      attributes: {
        class: "progress-bar-container",
        style: {
          borderWidth: `${widgetProgressBarStyle.border.width}px`,
          borderRadius: `${widgetProgressBarStyle.border.radius}px`,
          borderStyle: `${widgetProgressBarStyle.border.line}`,
          borderColor: `${widgetProgressBarStyle.color.basic.border_color}`,
          backgroundColor: `${widgetProgressBarStyle.color.basic.background_color}`,
        },
      },
    });

    const progressBarSteps = await createBasicProgressBarHtml(
      config,
      userLocationData
    );
    progressBarContainer.innerHTML = progressBarSteps.replace(/&nbsp;/g, "");

    progressBarWidgetBox.appendChild(progressBarContainer);

    return progressBarWidgetBox;
  }

  // ------------------------------ Advanced Progress Bar Widget ------------------------------
  async function createAdvancedProgressBarHtml(config, userLocationData) {
    const widgetProgressBarStyle = config.widget_progress_bar_appearance;
    const lastActiveStepIndex = config.widget_progress_bar_info.findLastIndex(
      (step) => step.status
    );

    const tokenValues = await getTokensValue(config, userLocationData);

    let stepsHtml = "";
    await config.widget_progress_bar_info.forEach((step, index) => {
      const formattedDescription = replaceTokenPlaceholders(
        step?.date_description || "",
        tokenValues
      );

      stepsHtml +=
        '<div key="progress-bar-step-' +
        index +
        '" style="width: ' +
        100 / config.widget_progress_bar_info.length +
        "%; background-color: " +
        widgetProgressBarStyle.color.advanced.background_color +
        ';" class="progress-bar-step-box">';
      stepsHtml +=
        '<div style="display: flex; border-radius: 50%; justify-content: center; align-items: center; width: ' +
        (widgetProgressBarStyle.font.icon_size + 22) +
        "px; height: " +
        (widgetProgressBarStyle.font.icon_size + 22) +
        "px; background-color: " +
        widgetProgressBarStyle.color.advanced.icon_background_color +
        ';">';
      stepsHtml +=
        '<svg viewBox="0 0 1024 1024" width="' +
        widgetProgressBarStyle.font.icon_size +
        '" height="' +
        widgetProgressBarStyle.font.icon_size +
        '" fill="' +
        widgetProgressBarStyle.color.advanced.icon_color +
        '">';
      stepsHtml += getSVGIconPath(step.svg.split("icon_")[1]);
      stepsHtml += "</svg>";
      stepsHtml += "</div>";
      stepsHtml +=
        '<div class="advanced-progress-bar" style="text-align: center; margin-top: 4px;">';
      stepsHtml +=
        '<div style="font-weight: 700; background-color: ' +
        widgetProgressBarStyle.color.advanced.status_title_background_color +
        "; color: " +
        widgetProgressBarStyle.color.advanced.status_title_color +
        "; font-size: " +
        widgetProgressBarStyle.font.status_title_text_size +
        "px; font-family: " +
        widgetProgressBarStyle.font.status_title_font_family +
        ';">';
      stepsHtml += step.title;
      stepsHtml += "</div>";
      stepsHtml += '<div class="tooltip-container">';
      stepsHtml +=
        '<span style="margin-top: ' +
        widgetProgressBarStyle.font.status_title_text_size / 3 +
        "px; font-weight: 400; background-color: " +
        widgetProgressBarStyle.color.advanced.date_title_background_color +
        "; color: " +
        widgetProgressBarStyle.color.advanced.date_title_color +
        "; font-size: " +
        widgetProgressBarStyle.font.date_title_text_size +
        "px; font-family: " +
        widgetProgressBarStyle.font.date_title_font_family +
        ';">';
      stepsHtml += formattedDescription;
      stepsHtml += "</span>";
      stepsHtml +=
        '<p class="tooltip-description" style="background-color: ' +
        widgetProgressBarStyle.color.advanced.tip_description_background_color +
        "; color: " +
        widgetProgressBarStyle.color.advanced.tip_description_color +
        "; font-size: " +
        widgetProgressBarStyle.font.tip_description_text_size +
        "px; font-family: " +
        widgetProgressBarStyle.font.tip_description_font_family +
        ';">';
      stepsHtml +=
        '<span style="border-bottom-color: ' +
        widgetProgressBarStyle.color.advanced.tip_description_background_color +
        ';"></span>';
      stepsHtml += step.tip_description;
      stepsHtml += "</p>";
      stepsHtml += "</div>";
      stepsHtml += "</div>";
      stepsHtml +=
        index < lastActiveStepIndex
          ? '<div style="position: absolute; top: ' +
            ((widgetProgressBarStyle.font.icon_size + 22) / 2 + 10) +
            "px; left: calc(50% + " +
            ((widgetProgressBarStyle.font.icon_size + 22) / 2 + 12) +
            "px); right: calc(-50% + " +
            ((widgetProgressBarStyle.font.icon_size + 22) / 2 + 12) +
            'px); z-index: 5;"><span style="border: 0; height: 3px; border-radius: 1px; background-color: ' +
            widgetProgressBarStyle.color.advanced.progress_line_color +
            '; display: block;"></span></div>'
          : "";
      stepsHtml += "</div>";
    });

    return stepsHtml;
  }

  async function createAdvancedProgressBarWidget(config, userLocationData) {
    const widgetProgressBarStyle = config.widget_progress_bar_appearance;
    const progressBarWidgetBox = await createElem({
      tag: "div",
      attributes: {
        style: {
          margin: `${widgetProgressBarStyle.other.margin[0]}px ${widgetProgressBarStyle.other.margin[1]}px ${widgetProgressBarStyle.other.margin[2]}px ${widgetProgressBarStyle.other.margin[3]}px`,
          padding: `${widgetProgressBarStyle.other.padding[0]}px ${widgetProgressBarStyle.other.padding[1]}px ${widgetProgressBarStyle.other.padding[2]}px ${widgetProgressBarStyle.other.padding[3]}px`,
        },
      },
    });

    const progressBarContainer = await createElem({
      tag: "div",
      attributes: {
        class: "progress-bar-container",
        style: {
          borderWidth: `0px`,
          borderRadius: `${widgetProgressBarStyle.border.radius}px`,
          borderStyle: `${widgetProgressBarStyle.border.line}`,
          borderColor: `${widgetProgressBarStyle.color.advanced.border_color}`,
          backgroundColor: `${widgetProgressBarStyle.color.advanced.background_color}`,
        },
      },
    });

    const progressBarSteps = await createAdvancedProgressBarHtml(
      config,
      userLocationData
    );
    progressBarContainer.innerHTML = progressBarSteps.replace(/&nbsp;/g, "");

    progressBarWidgetBox.appendChild(progressBarContainer);

    return progressBarWidgetBox;
  }

  // ------------------------------ MAIN FUNCTIONS ------------------------------
  async function renderCountryModal(modalSettings, modalStyle) {
    const countryModal = await createElem({
      tag: "div",
      attributes: {
        id: "advanced-country-modal",
        class: "advanced-country-modal",
        style: {
          backgroundColor: `rgba(${modalSettings.rgba[0]}, ${modalSettings.rgba[1]}, ${modalSettings.rgba[2]}, ${modalSettings.rgba[3]})`,
        },
      },
    });

    let modalHtml = "";
    modalHtml += '<div class="country-modal-body">';
    modalHtml += '<div class="country-modal-content">';
    modalHtml +=
      '<div class="selected-country" style="color: ' +
      modalStyle.color.text_color +
      "; background:" +
      modalStyle.color.background_color +
      "; border-width: " +
      modalStyle.border.width +
      "px; border-radius: " +
      modalStyle.border.radius +
      "px; border-style:" +
      modalStyle.border.line +
      "; font-size: " +
      modalStyle.font.text_size +
      "; font-family: " +
      modalStyle.font.text_font_family +
      ';">';

    modalHtml +=
      '<span class="selected-country-flag-and-name" style="display: inline-flex; align-items: center; justify-content: center; color: ' +
      modalStyle.color.text_color +
      "; font-size: " +
      modalStyle.font.text_size +
      "px; font-family: " +
      modalStyle.font.text_font_family +
      '">';

    modalHtml +=
      '<span class="" style="display: inline-block; margin-right: 6px"></span>';
    modalHtml += "<span></span>";
    modalHtml += "</span>";
    modalHtml +=
      '<span class="select-country-dropdown" style="color: ' +
      modalStyle.color.icon_color +
      "; font-size:" +
      modalStyle.font.icon_size +
      'px;">';
    modalHtml +=
      '<svg class="icon" style="width: 1em; height: 1em; vertical-align: middle; fill: ' +
      modalStyle.color.icon_color +
      '; overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5661">';
    modalHtml +=
      '<path d="M958.160991 320.247768 511.011998 766.80222 63.791373 320.247768l65.113997-65.098647L511.011998 636.748189l382.034996-381.599068L958.160991 320.247768" p-id="5662"></path>';
    modalHtml += "</svg>";
    modalHtml += "</span>";
    modalHtml += "</div>";
    modalHtml +=
      '<div class="select-country-options" style="color: ' +
      modalStyle.color.text_color +
      "; background:" +
      modalStyle.color.background_color +
      "; border-width: " +
      modalStyle.border.width +
      "px; border-radius: " +
      modalStyle.border.radius +
      "px; border-style:" +
      modalStyle.border.line +
      "; font-size: " +
      modalStyle.font.text_size +
      "; font-family: " +
      modalStyle.font.text_font_family +
      ';">';
    modalHtml += '<div class="country-search-box">';
    modalHtml +=
      '<span class="country-search-icon" style="color: ' +
      modalStyle.color.icon_color +
      "; font-size:" +
      modalStyle.font.icon_size +
      'px;">';
    modalHtml +=
      '<svg class="icon" style="width: 1em; height: 1em; vertical-align: middle; fill: ' +
      modalStyle.color.icon_color +
      '; overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1447">';
    modalHtml +=
      '<path d="M469.333333 853.333333c-213.333333 0-384-170.666667-384-384s170.666667-384 384-384 384 170.666667 384 384-170.666667 384-384 384z m0-682.666666c-166.4 0-298.666667 132.266667-298.666666 298.666666s132.266667 298.666667 298.666666 298.666667 298.666667-132.266667 298.666667-298.666667-132.266667-298.666667-298.666667-298.666666zM896 938.666667c-12.8 0-21.333333-4.266667-29.866667-12.8L682.666667 742.4c-17.066667-17.066667-17.066667-42.666667 0-59.733333s42.666667-17.066667 59.733333 0l183.466667 183.466666c17.066667 17.066667 17.066667 42.666667 0 59.733334-8.533333 8.533333-17.066667 12.8-29.866667 12.8z" p-id="1448"></path>';
    modalHtml += "</svg>";
    modalHtml += "</span>";
    modalHtml +=
      '<input class="country-search-input" type="text" style="color: ' +
      modalStyle.color.text_color +
      "; background:" +
      modalStyle.color.background_color +
      "; font-size: " +
      modalStyle.font.text_size +
      "; font-family: " +
      modalStyle.font.text_font_family +
      ';">';
    modalHtml += "</div>";
    modalHtml +=
      '<ul class="country-option-list" style="color:' +
      modalStyle.color.text_color +
      ";font-size: " +
      modalStyle.font.text_size +
      "; font-family: " +
      modalStyle.font.text_font_family +
      ';">';
    modalHtml += '<li class="" data-code="" data-name="">';
    modalHtml += '<span class="" style="display: inline-block;"></span>';
    modalHtml += "<span></span>";
    modalHtml += "</li>";
    modalHtml += "</ul>";
    modalHtml += "</div>";
    modalHtml += "</div>";
    modalHtml += "</div>";

    countryModal.innerHTML = modalHtml;

    return countryModal;
  }

  async function renderWidget(container, config, userLocationData) {
    try {
      const countryModal = await renderCountryModal(
        config.country_advanced_modal_setting,
        config.country_advanced_modal_appearance
      );
      container.appendChild(countryModal);

      const widgetBox = await createWidgetBox(config.widget_box_appearnace);
      const textMessageWidget = await createTextWidget(
        config,
        userLocationData
      );

      let progressBarWidget;

      if (config.widget_progress_bar_mode === "basic") {
        progressBarWidget = await createBasicProgressBarWidget(
          config,
          userLocationData
        );
      } else {
        progressBarWidget = await createAdvancedProgressBarWidget(
          config,
          userLocationData
        );
      }

      if (config.widget_layout_mode === "messageAndProgress") {
        if (config.widget_layout_mode !== "progressOnly") {
          widgetBox.appendChild(textMessageWidget);
        }
        if (config.widget_layout_mode !== "messageOnly") {
          widgetBox.appendChild(progressBarWidget);
        }
      } else {
        if (config.widget_layout_mode !== "messageOnly") {
          widgetBox.appendChild(progressBarWidget);
        }
        if (config.widget_layout_mode !== "progressOnly") {
          widgetBox.appendChild(textMessageWidget);
        }
      }

      container.appendChild(widgetBox);
      updateAdvancedCountryModal();
      updateCountry(
        userLocationData.country_code,
        userLocationData.country_name
      );
    } catch (error) {
      console.error("Error rendering widget:", error);
      container.innerHTML = "<p>Failed to load widget.</p>";
    }
  }

  // ------------------------------ SHOPIFY DATA GETERS FUNCTIONS ------------------------------
  // Get Shop from various sources
  async function getShop() {
    try {
      if (window.Shopify && Shopify.shop) {
        return Shopify.shop;
      }

      return null;
    } catch (error) {
      console.error("Error getting shop:", error);
      return null;
    }
  }

  // Get product ID from various sources
  async function getProductId() {
    try {
      // Option 1: ShopifyAnalytics object (works on product pages)
      if (
        window.ShopifyAnalytics &&
        ShopifyAnalytics.meta &&
        ShopifyAnalytics.meta.product
      ) {
        return ShopifyAnalytics.meta.product.id;
      }

      // Option 2: Meta tag
      const metaProduct = document.querySelector('meta[property="product:id"]');
      if (metaProduct) {
        return metaProduct.getAttribute("content");
      }

      // Option 3: Extract from URL (if URL follows standard product path)
      const match = window.location.pathname.match(/\/products\/([\w-]+)/);
      if (match) {
        return await fetchProductIdByHandle(match[1]); // Fetch ID using product handle
      }

      return null;
    } catch (error) {
      console.error("Error retrieving product ID:", error);
      return null;
    }
  }
  // Fetch product ID by handle
  async function fetchProductIdByHandle(handle) {
    try {
      const response = await fetch(`/products/${handle}.json`);
      if (!response.ok) throw new Error("Failed to fetch product data");

      const data = await response.json();
      return data.product ? data.product.id : null;
    } catch (error) {
      console.error("Error fetching product ID by handle:", error);
      return null;
    }
  }

  async function getUserLocation() {
    async function fetchFromGeoJs() {
      const response = await fetch("https://get.geojs.io/v1/ip/geo.json");
      const data = await response.json();
      return data;
    }

    async function fetchFromGeoJsCountry() {
      const response = await fetch("https://get.geojs.io/v1/ip/country.json");
      const data = await response.json();
      return data;
    }

    async function fetchFromIpApi() {
      const response = await fetch("https://ipapi.co/json/");
      const data = await response.json();
      return data;
    }

    function processResponse(data) {
      let locationInfo = {
        country_code: data.country_code
          ? data.country_code.toLowerCase()
          : "us",
        country_name: data.country || "United States",
        region_name: data.region || "",
      };

      return locationInfo;
    }

    try {
      let response = await fetchFromGeoJs();
      return processResponse(response);
    } catch {
      try {
        let response = await fetchFromGeoJsCountry();
        return processResponse({
          country_code: response.country
            ? response.country.toLowerCase()
            : "us",
          country_name: response.name || "United States",
          region_name: "",
        });
      } catch {
        try {
          let response = await fetchFromIpApi();
          return processResponse(response);
        } catch (error) {
          throw error;
        }
      }
    }
  }

  // Fetch delivery configuration for a product
  async function fetchConfig(productId, shop) {
    try {
      const response = await fetch(
        `/apps/proxy/delivery-configuration/${productId}?shop=${shop}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "true",
          },
        }
      );

      if (!response.ok) {
        console.error("Failed to fetch config:", response.status);
        return { config: null, settings: null, locationData: null };
      }

      const responseData = await response.json();

      if (!responseData || !responseData.success || !responseData.data) {
        console.error("Invalid response format:", responseData);
        return { config: null, settings: null, locationData: null };
      }

      return {
        config: responseData.data,
        settings: responseData.settings,
        locationData: responseData.locationData,
      };
    } catch (error) {
      console.error("Error fetching config:", error);
      return { config: null, settings: null, locationData: null };
    }
  }

  async function addContainer(container, selectors, position, atEnd = true) {
    // Find the Add-to-Cart element
    const queryElement = document.querySelector(selectors.join(", "));
    console.log("🚀 ~ addContainer ~ queryElement:", queryElement)

    // Ensure we're on a product page before proceeding
    if (window.location.pathname.includes("/products") && queryElement) {
      // Insert the custom container BEFORE or AFTER the Add-to-Cart form/button
      if (position === "above") {
        queryElement.parentNode.insertBefore(container, queryElement);
      } else if (position === "below") {
        queryElement.parentNode.insertBefore(
          container,
          queryElement.nextSibling
        );
      } else {
        if (atEnd) {
          queryElement.appendChild(container);
        } else {
          queryElement.insertBefore(container, queryElement.firstChild);
        }
      }
    } else {
      console.warn(
        "Add-to-Cart form/button not found. The script did not run."
      );
    }
  }

  async function initStyles() {
    const cssUrls = [
      "https://cdn.jsdelivr.net/gh/Vaghani-Rushal/shopify-app-assets@main/code-flags.css",
      "https://cdn.jsdelivr.net/gh/Vaghani-Rushal/shopify-app-assets@main/country-modal.css",
      "https://cdn.jsdelivr.net/gh/Vaghani-Rushal/shopify-app-assets@main/my-app-block.css",
    ];

    cssUrls.forEach((url) => {
      insertStryleTag(url);
    });
  }

  async function initScript() {
    try {
      // Get product ID from Liquid (if available)
      console.log("function calling");
      let productId = window?.shopifyProductId || null;
      let shop = window?.shopifyShop || null;

      console.log("get the shops and productId");

      if (!shop) {
        shop = await getShop();
      }

      // If product ID is not passed via Liquid, try dynamic detection
      if (!productId) {
        productId = await getProductId();
      }

      // If shop or product ID is still missing, exit
      if (!productId || !shop) {
        console.warn("Product ID or shop not found, cannot load widget.");
        return;
      }

      const { config, settings, locationData } = await fetchConfig(
        productId,
        shop
      );

      if (!config || !settings) {
        console.error("Failed to fetch config or settings.");
        return;
      }

      console.log("get the config and setting");
      console.log("config: ", config);
      console.log("settings: ", settings);

      let container;
      if (settings?.widget_layout?.placement_method === "theme2") {
        container = document.querySelector(".shop-cms-widget_app_block");
      } else if (settings?.widget_layout?.placement_method === "manual") {
        container = document.querySelector(".shop-cms-widget_manual");
      } else if (settings?.widget_layout?.placement_method === "automatic") {
        // List of all possible selectors for Add-to-Cart forms and buttons
        const addToCartSelectors = [
          'form[action*="/cart/add"]',
          'button[name="add"]',
          'input[name="add"]',
          'button[name="addToCart"]',
          'input[name="addToCart"]',
          'button[data-action="add-to-cart"]',
          'button[data-action="AddToCart"]',
          "[data-product-add]",
          '[data-action="purchase"]',
          '[data-action="BuyNow"]',
          ".add-to-cart",
          ".add_to_cart",
          ".product-form--atc-button",
          ".add-to-cart-button",
          ".add_to_cart_button",
          ".btn-add-to-cart",
          ".btn_add_to_cart",
          ".button-add-to-cart",
          ".button_add_to_cart",
          ".product-atc-btn",
          ".cart__checkout-btn",
          ".product-atc__button",
          ".complete-design-a",
          ".product_buttonContainer-addToCart a",
          ".btn--add-to-cart",
          ".qsc-btn--add-to-cart",
          "#add-to-cart",
          "#addToCart",
          "#addToCartButton",
          "#addToCartBtn",
          "#shopify_add_to_cart",
          "[name=add]",
          "[name=addToCart]",
          "[name=AddToCart]",
          ".g-stickybar-buynow",
        ];
        container = await createElem({
          tag: "div",
          attributes: { class: "shop-cms-widget_auto" },
        });
        await addContainer(
          container,
          addToCartSelectors,
          settings?.widget_layout?.placement_position,
          false
        );
      } else if (settings?.widget_layout?.placement_method === "query") {
        container = await createElem({
          tag: "div",
          attributes: { class: "shop-cms-widget_query" },
        });
        await addContainer(
          container,
          [settings?.widget_layout?.query],
          settings?.widget_layout?.placement_position,
          false
        );
      }

      if (!container) return;

      console.log("got the container", container);

      const countryList = getCountryList();
      let userLocationData = {
        country_code: locationData?.country?.toLowerCase() || "us",
        country_name: countryList[locationData?.country?.toLowerCase() || "us"],
        region_name: locationData?.region || "",
      };
      if (!locationData) {
        userLocationData = await getUserLocation();
      }

      renderWidget(container, config, userLocationData);
    } catch (error) {
      console.error("Error initializing widget:", error);
    }
  }

  async function initAll() {
    await initStyles();
    await initScript();
  }

  initAll();
})();

// https://cdn.jsdelivr.net/gh/Vaghani-Rushal/shopify-app-assets@main/code_flags.png
// https://cdn.jsdelivr.net/gh/Vaghani-Rushal/shopify-app-assets@main/code-flags.css
// https://cdn.jsdelivr.net/gh/Vaghani-Rushal/shopify-app-assets@main/country-modal.css
// https://cdn.jsdelivr.net/gh/Vaghani-Rushal/shopify-app-assets@main/my-app-block.css
// https://cdn.jsdelivr.net/gh/Vaghani-Rushal/shopify-app-assets@main/my-app-block.js
