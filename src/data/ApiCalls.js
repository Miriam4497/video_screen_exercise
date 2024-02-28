const judgesList = [
  { tag: 'דובר', title: 'ועדת ערר לעניני קורונה', nick: 'כבוד השופטת', name: 'ישראלה ישראלוף', type: 1, isMe: true, url: require("../assets/provider_contact.jpg"), isTalking: true },
  { tag: 'דובר', title: 'ועדת ערר לעניני קורונה', nick: 'כבוד השופטת', name: 'ישראלה ישראלוף', type: 1, isMe: false, url: require("../assets/provider_contact.jpg"), isTalking: false },
  // { tag: 'דובר', title: 'ועדת ערר לעניני קורונה', nick: 'כבוד השופטת', name: 'ישראלה ישראלוף', type: 1, isMe: true, url: require("../assets/provider_contact.jpg"), isTalking: true },
  // { tag: 'דובר', title: 'ועדת ערר לעניני קורונה', nick: 'כבוד השופטת', name: 'ישראלה ישראלוף', type: 1, isMe: true, url: require("../assets/provider_contact.jpg"), isTalking: true },
  // { tag: 'דובר', title: 'ועדת ערר לעניני קורונה', nick: 'כבוד השופטת', name: 'ישראלה ישראלוף', type: 1, isMe: false, url: require("../assets/provider_contact.jpg"), isTalking: false },
];
const speakersList = [
  { tag: 'צד עורך', title: 'צד עורך', nick: 'עו"ד', name: 'קובי יעקובי', type: 2, isMe: false, url: require("../assets/provider_contact.jpg"), isTalking: false },
  { tag: 'צד משיב', title: 'צד עורך', nick: 'עו"ד', name: 'שושנה שושני', type: 2, isMe: false, url: require("../assets/provider_contact.jpg"), isTalking: false },
  { tag: 'דובר', title: 'צד עורך', nick: 'עו"ד', name: 'קובי יעקובי', type: 2, isMe: false, url: require("../assets/provider_contact.jpg"), isTalking: false },
];

export const getData = (value) => {
  return new Promise((resolve, reject) => {
    try {
      if (judgesList.length && speakersList.length) {
        resolve(value === 1 ? judgesList : speakersList);
      } else {
        reject('No Data is available.');
      }
    } catch (e) {
      reject('An error occurred fetching Data:' + e);
    }
  });
};