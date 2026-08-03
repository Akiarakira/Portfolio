# Data files

## `testimonials.json`

Paste new testimonials here. The section on the homepage updates automatically.

Copy this block and fill it in:

```json
{
  "name": "Full Name",
  "role": "Job Title",
  "company": "Company or Website",
  "avatar": "",
  "rating": 5,
  "quote": "What they said about working with you."
}
```

### Fields

| Field     | Required | Notes                                                                 |
| --------- | -------- | --------------------------------------------------------------------- |
| `name`    | yes      | Shown under the quote.                                                  |
| `role`    | no       | Job title, e.g. `Marketing Manager`.                                    |
| `company` | no       | Shown next to the role, separated by a dot.                             |
| `avatar`  | no       | URL or path to an image. Leave `""` to auto-generate initials instead.  |
| `rating`  | no       | Number from `1` to `5`. Defaults to `5`.                                |
| `quote`   | yes      | The testimonial text. No quotation marks needed, they are added by CSS. |

Remember to separate each object with a comma and keep the outer `[ ]` array.
