# Data files

## `testimonials.json`

Paste new testimonials here. The section on the homepage updates automatically.

Copy this block and fill it in:

```json
{
  "name": "Full Name",
  "profile": "https://www.linkedin.com/in/profile/",
  "role": "Job Title",
  "company": "Company or Website",
  "avatar": "",
  "rating": 5,
  "quote": "What they said about working with you.",
  "quoteEs": "Spanish translation (optional)."
}
```

### Fields

| Field     | Required | Notes                                                                 |
| --------- | -------- | --------------------------------------------------------------------- |
| `name`    | yes      | Shown under the quote.                                                  |
| `profile` | no       | Profile URL; links the person's name.                                   |
| `role`    | no       | Job title, e.g. `Marketing Manager`.                                    |
| `company` | no       | Shown next to the role, separated by a dot.                             |
| `avatar`  | no       | URL or path to an image. Leave `""` to auto-generate initials instead.  |
| `rating`  | no       | Number from `1` to `5`. Defaults to `5`.                                |
| `quote`   | yes      | The testimonial text. No quotation marks needed, they are added by CSS. |
| `quoteEs` | no       | Spanish version, shown when the site's language is set to Spanish.       |

Remember to separate each object with a comma and keep the outer `[ ]` array.
