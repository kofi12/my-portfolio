/**
 * The "What goes wrong" library. One entry per failure mode.
 * Entries without a `body` appear in the index but have no page yet.
 * Paragraph strings may use `backticks` for inline code.
 */
export type FailureModeBody = {
  whatItIs: string[];
  fromYourSide: string[];
  cost: string[];
  check: string[];
  checkNote?: string;
  fix: string[];
};

export type FailureMode = {
  slug: string;
  title: string;
  /** One line under the title, and the index row. */
  summary: string;
  /** Meta description. */
  description: string;
  body?: FailureModeBody;
};

export const LIBRARY_PATH = '/what-goes-wrong';

export const FAILURE_MODES: FailureMode[] = [
  {
    slug: 'secrets-in-the-browser',
    title: 'Secrets in the browser',
    summary: 'Your private keys are inside the app, where anyone can copy them.',
    description: 'What it means when your private keys are inside the app itself, what it costs, and a 30-second check you can do in your browser right now.',
    body: {
      whatItIs: [
        'Your app talks to other services: a database, a payment company, an email service, an AI model. Each one gives you a key, a long string of letters and numbers that proves it’s you. Some keys are designed to be public. Most are not.',
        'A secret key in the browser means it’s inside the part of your app that gets sent to every visitor. Anyone can open the page, look behind it, and copy the key. AI coding tools do this often, because it’s the shortest path to making a feature work.',
      ],
      fromYourSide: [
        'Usually nothing. The app works. The first sign is often a bill: an AI or email provider charging for usage you didn’t generate. Or a message from a provider saying one of your keys was found in public. Or data that changed when nobody on your team changed it.',
      ],
      cost: [
        'Someone runs up your bill on your keys. Someone reads your database with your own credentials. Someone sends email as you.',
        'Every key has to be rotated in a hurry, which means downtime while everything that used them is updated. If a key was ever posted somewhere public, like a public GitHub project, assume it was copied within minutes.',
      ],
      check: [
        'Open your app in Chrome and sign in the way a customer would.',
        'Press F12, or Cmd+Option+I on a Mac. A panel opens showing what’s behind the page. Click the tab called Sources, which lists every file the page loaded.',
        'Press Ctrl+Shift+F, or Cmd+Option+F on a Mac. This searches inside all of those files at once.',
        'Search for `sk_live`. Then `service_role`. Then `eyJ`.',
        '`sk_live` is the start of a Stripe secret key. `service_role` is a master key for your database that skips every rule about who can see what. Either one showing up is a finding. `eyJ` is the start of a token, a temporary pass. One tied to your own sign-in is normal, but one sitting in the code itself is worth asking about. Keys starting with `pk_live` or labelled `anon` are designed to be public, so on their own they’re fine.',
      ],
      checkNote: 'Not sure what you’re looking at? Screenshot it and send it with your booking. Reading it is part of the review.',
      fix: [
        'The keys move out of the app and onto your server, the part of your app that users never see. The app asks the server to do the work, and the server checks who’s asking before it does.',
        'Any key that was ever in the app gets replaced, because you have to assume it was copied. The review tells you which keys are exposed, what each one can do, and what fixing it costs.',
      ],
    },
  },
  {
    slug: 'access-control',
    title: 'Users who can see each other’s data',
    summary: 'One user can see or change another user’s data.',
    description: 'What it means when the rules about who can see what are missing, what a leak between users costs, and a 30-second check.',
    body: {
      whatItIs: [
        'Your app stores records that belong to different people: their orders, their messages, their documents. Somewhere there needs to be a rule that says who is allowed to see and change which records. That rule has to live on your server or in your database, the parts users can’t touch. Anything decided on the user’s own device can be changed by the user.',
        'AI tools often build the rule into the screen instead. The page only shows your records, so it looks right. But the request behind the page will hand over anyone’s records if you ask for them by number. If you use Supabase or something like it, the database has its own rules for this (it calls them row-level security), and it’s common for them to be missing, or switched on with a rule that lets everyone through.',
      ],
      fromYourSide: [
        'Nothing, until a user tells you. A customer emails a screenshot of someone else’s order. Someone changes the number at the end of a web address from 1042 to 1041 and sees another company’s invoice. Or nobody tells you, and it shows up later in a security questionnaire, or in a complaint.',
      ],
      cost: [
        'A privacy breach, even a small one, is a conversation with a lawyer. Depending on where your users are, you may be legally required to report it. It also ends deals: an enterprise buyer who finds this in a security review won’t sign.',
        'And if the rule is missing for reading, it’s usually missing for changing too, so one user can edit or delete another’s data.',
      ],
      check: [
        'Sign in to your app and open something that belongs only to you, like an order, a project, or a profile page.',
        'Look at the address bar. If the address ends in a number or a code, change it by one and press Enter. If you have a second test account, sign in as that account and paste in the first account’s address instead.',
        'You should get an error or an empty page. If you see someone else’s record, that’s the finding.',
        'If your app uses Supabase, open your Supabase dashboard and click Table Editor. Each table shows whether row-level security is switched on. A table holding user data with it off, or with a rule that just says `true`, is worth asking about.',
      ],
      checkNote: 'Only do this with your own test accounts. Don’t go looking at real customers’ records to prove the point.',
      fix: [
        'The rules move to where users can’t change them: the database or the server. Every table that holds user data gets a rule saying who can read and change each record, and every request for a record checks that the person asking is allowed.',
        'Then I test it with two accounts trying to reach each other’s data, and those tests stay with your code so the rule can’t quietly disappear later.',
      ],
    },
  },
  {
    slug: 'payment-webhooks',
    title: 'Payments taken on trust',
    summary: 'Your app believes anything that says it’s from Stripe.',
    description: 'What it means when your app believes any payment message, how people get paid features without paying, and how to check yours.',
    body: {
      whatItIs: [
        'When someone pays, Stripe doesn’t just show a success screen. It sends your app a message behind the scenes (Stripe calls it a webhook) saying the payment went through. Your app reads that message and switches on the paid feature. The message comes with a signature that proves it really came from Stripe. Checking that signature is one line of code. Many AI-built apps skip it.',
        'Without the check, your app believes any message that looks like it’s from Stripe. Anyone who knows the address your app listens on can send one.',
      ],
      fromYourSide: [
        'Your dashboard shows paying customers that Stripe has no record of. Or the other way round: Stripe has the payment, but the customer never got access, because the message was handled wrong and nobody noticed. Either way the first sign is a support email.',
      ],
      cost: [
        'People get paid features without paying, and you can’t tell which ones. Refund disputes get messy because your records and Stripe’s disagree. If the same message also handles cancellations, a fake one can cut off a paying customer.',
      ],
      check: [
        'Open your Stripe dashboard. Go to Developers, then Webhooks. You should see at least one entry pointing at your app’s address. If there are none, your app may be relying on the success screen alone, which anyone can fake.',
        'Click the entry. Stripe shows a signing secret for it, starting with `whsec_`. Note whether it’s there.',
        'Now open the settings for your app wherever it’s hosted, or in your AI tool’s settings page, and look at the list of saved secrets (often called environment variables). If none of them holds a `whsec_` value, your app has nothing to check the signature with.',
        'While you’re in Stripe, look at the entry’s recent deliveries. A long list of failures means Stripe is sending messages and your app isn’t handling them.',
      ],
      checkNote: 'Reading these pages is safe. Don’t regenerate or delete anything while you look.',
      fix: [
        'Every message from Stripe is checked against the signing secret before anything else happens, and anything that fails is thrown away. The same message arriving twice does no harm, because Stripe will resend. Paid features switch on from the verified message, never from the success screen.',
        'I test it by sending a fake message and a repeated one.',
      ],
    },
  },
  {
    slug: 'input-validation',
    title: 'Forms that accept anything',
    summary: 'Your app accepts whatever it’s sent, including things that break it.',
    description: 'What it means when your app takes whatever it’s given, what bad data and break-ins cost, and a safe 30-second check.',
    body: {
      whatItIs: [
        'Every form field and every request your app receives is something a person typed, or something a program sent. Checking it before using it is called validation: is the email actually an email, is the quantity a whole number, is the text short enough, is this field even something the user is allowed to set.',
        'AI tools tend to write the happy path. The field expects a number, so the code assumes it got one. When it gets something else, the best case is a crash. The worse cases are data that’s wrong from then on, or typed input that the app treats as a command. That’s how break-ins work.',
      ],
      fromYourSide: [
        'Odd records: a customer with a blank name, an order for negative three items, a date in the year 20233. Pages that crash for one specific user. Or a field that was only meant for you, like a user’s role or a product’s price, that turns out to be changeable from the sign-up form.',
      ],
      cost: [
        'Bad data is expensive because it spreads. A wrong price on one order feeds into reports, invoices and refunds. A missing check on a hidden field can let a user make themselves an admin or set their own price. And unchecked input reaching your database is the classic way attackers read or destroy it.',
      ],
      check: [
        'Open a form in your app, any one that saves something. Try a few wrong answers: letters in a number field, a negative quantity, a date that doesn’t exist, a very long piece of text pasted into a short field. Submit.',
        'You should see a clear error and nothing saved. If the app saves it, crashes, or shows a blank screen, that’s the finding.',
        'Open your sign-up or profile page and press F12, or Cmd+Option+I on a Mac. Click the tab called Network, which lists what the page sends and receives. Save the form, then click the new line that appears and look for a section called Payload or Request. If you see fields you never typed, like `role`, `plan`, `credits` or `is_admin`, your app may be accepting whatever the form sends for them.',
      ],
      checkNote: 'Use a test account. Wrong data in a real customer’s record is exactly what you’re trying to avoid.',
      fix: [
        'Every request gets a written definition of what’s allowed: which fields, what kind of value, what range. Anything outside it is rejected with a clear message before it touches the database. Fields the user shouldn’t control are stripped out entirely.',
        'Database instructions are built in a way that treats typed input as data, never as a command, which closes the break-in path. The definition lives next to the code, so the next AI session sees it too.',
      ],
    },
  },
  {
    slug: 'silent-failures',
    title: 'Silent failures',
    summary: 'Errors are swallowed, so you find out from a customer.',
    description: 'What silent failures are, why a failed save can look like a success, and how to check your app for them.',
    body: {
      whatItIs: [
        'Things fail. A save times out, an email bounces, a payment company is down for a minute. What your app does next matters: tell the user, try again, or write it down so you can see it later. A silent failure is when the code notices the problem and does nothing. The user sees a spinner that stops, or a success message for something that didn’t happen.',
        'AI tools produce this constantly. Telling the code to ignore the error makes the red warning go away, which looks like fixing it.',
      ],
      fromYourSide: [
        'Customers say they did something and your records say they didn’t. Emails that never arrived. Uploads that show a tick and then aren’t there. You can’t reproduce it, because from the outside nothing went wrong. Your logs, if you have them, are empty.',
      ],
      cost: [
        'Every silent failure is a support ticket you can’t answer, because you have no record of what happened. Lost orders, lost sign-ups, lost data. And when something is genuinely broken, you find out from the customer who noticed instead of from the app, usually days later.',
      ],
      check: [
        'Open your app and turn off your Wi-Fi, or switch your phone to airplane mode. Then try to save something.',
        'You should see a clear message that it didn’t work. If you see a success message, or the spinner just stops, the app is hiding failures.',
        'Turn the connection back on and check whether the thing you saved is there. If the app said it saved and it isn’t, that’s the finding.',
        'Then ask yourself: where would you look if a customer said a save failed yesterday? If the answer is nowhere, there’s no error reporting.',
      ],
      fix: [
        'Every place the code ignores an error gets a real decision: show the user, try again, or stop loudly. Failures are sent to an error-reporting service so you see them before customers do, with enough detail to know which user and which action.',
        'The parts of the app that matter most get tests that check what happens when something they depend on fails, not just when it works.',
      ],
    },
  },
  {
    slug: 'queries-under-load',
    title: 'Slows down as you grow',
    summary: 'Fine with ten users. Timeouts with a thousand.',
    description: 'Why an app that works today slows to a crawl at launch, what it costs, and a 30-second check.',
    body: {
      whatItIs: [
        'When your app looks something up, the database has to find it. With ten records it can read everything and it’s instant. With a hundred thousand, reading everything for every request is what makes a page take eight seconds, then give up. A database index is like the index at the back of a book: a way to find a record without reading every page. AI tools rarely add them, because the app is fast while it’s being built.',
        'The same goes for lookups that fetch far more than the page needs: loading every order to show the latest five, or going back to the database once for each row in a list.',
      ],
      fromYourSide: [
        'The app was fast and now it isn’t. Dashboards that take longer every month. A launch day where sign-ups spike and everything slows down at once. Timeouts that come and go. A hosting bill that climbs because the database is working far harder than it should.',
      ],
      cost: [
        'A slow app during your launch is the launch. People who hit a timeout on sign-up don’t come back. And the fix people reach for under pressure, a bigger database plan, is expensive and doesn’t fix the cause. The real fix is usually a few indexes and a few rewritten lookups, but you need to know which ones.',
      ],
      check: [
        'Open the page in your app that shows the longest list: orders, users, messages. Note how long it takes to load. Then open the same page for the account with the most data, if you have one.',
        'If you use Supabase, open the dashboard and look for Query Performance under Advisors. It lists the slowest lookups and suggests missing indexes. Anything described as a sequential scan on a big table means the database is reading everything, and that’s worth asking about.',
        'If you don’t use Supabase, your hosting dashboard usually has a database page with charts. Look at how load and response time have changed over the last month.',
      ],
      checkNote: 'This is read-only. Don’t run anything from these pages while you’re looking.',
      fix: [
        'I find the lookups that actually run on your busiest pages, add the indexes they need, and rewrite the ones that fetch too much or repeat themselves.',
        'Then I put realistic numbers of users through the core flow so you know where the next limit is, and note it in the report.',
      ],
    },
  },
  {
    slug: 'dependencies',
    title: 'Building blocks nobody checked',
    summary: 'Code libraries the AI made up, or ones nobody maintains.',
    description: 'What made-up and abandoned code libraries mean for your app, what they cost, and how to check for them.',
    body: {
      whatItIs: [
        'Your app is built on code libraries: pieces other people wrote, pulled in by name. AI tools sometimes make up a name that sounds right but doesn’t exist, and sometimes pick one that exists but was abandoned years ago, or one with a known security hole. Attackers know this. They register the made-up names and fill them with harmful code, so the next person whose tool remembers the name installs it.',
        'Even real, well-kept libraries need updating. One with a published security hole is an open door with a public map to it.',
      ],
      fromYourSide: [
        'Setup steps that fail with “package not found”. Warnings during builds that everyone ignores. A security questionnaire asking how you track vulnerable libraries, and no answer. Or nothing at all, until a provider or a customer’s scanner flags it.',
      ],
      cost: [
        'A harmful library runs with all the access your app has: your database, your keys, your users’ data. An abandoned one means the next security fix never comes. A known hole means you’re relying on nobody bothering to try it. Enterprise buyers ask about this directly, and “we don’t know” fails the questionnaire.',
      ],
      check: [
        'If your code is on GitHub, open the project and click the Security tab, then Dependabot alerts. If alerts are on, you’ll see a list of known problems in your libraries, each with a severity. If it says alerts are off, turn them on. It’s one click and it’s free.',
        'Open the file called `package.json` in your project, or `requirements.txt` for a Python app. It lists the libraries your app uses. Pick two or three names you don’t recognise and search for each on npmjs.com or pypi.org. Check when it was last updated and how many people use it. A library with no page, or one last updated years ago, is worth asking about.',
      ],
      checkNote: 'Looking is safe. Don’t click “update all” from any dashboard. A careless upgrade can break the app in ways that are hard to trace.',
      fix: [
        'Every library gets checked against the public lists of known security holes and against what it actually does in your app. Made-up or abandoned ones are replaced. Known holes are patched and the app is retested.',
        'Then an automatic check runs on every change so the list can’t drift again, and the report tells you which libraries matter and which are noise.',
      ],
    },
  },
  {
    slug: 'no-tests',
    title: 'No tests',
    summary: 'Nothing tells you something broke until someone clicks on it.',
    description: 'Why tests are a smoke alarm for an app that changes every time an AI tool touches it, and how to check whether you have any.',
    body: {
      whatItIs: [
        'A test is a small program that checks your app still does what it did yesterday: signing up creates an account, paying turns on the feature, a user can’t see another user’s data. Tests are a smoke alarm. Without one you find out there’s a fire when a customer smells smoke.',
        'This matters more in an AI-built app than most, because the code changes every time you or a tool touches it. Each session rewrites things you didn’t ask about. Without tests, the only way to notice is to click around and hope you clicked on the thing that broke.',
      ],
      fromYourSide: [
        'Every fix breaks something else. You’ve stopped touching the parts that work. Releases are scary, so they happen less often, and each one is bigger and scarier. You describe the same bug to your AI tool three times because it keeps bringing it back.',
      ],
      cost: [
        'Slow, nervous shipping. Old bugs coming back and reaching customers. A developer you hire later who can’t change anything safely, because nothing tells them what they broke. And it compounds: the longer an app goes without tests, the more expensive the first ones are to write.',
      ],
      check: [
        'Open your project on GitHub. Look for a folder called `tests`, `test`, `__tests__` or `spec`, or files whose names end in `.test.ts`, `.test.js` or `_test.py`. If there are none, the app has no smoke alarm.',
        'Click the Actions tab. This is where GitHub shows anything that runs automatically when the code changes. If it’s empty, nothing does. If there are runs, open the most recent one and see whether it actually ran tests or only built the app.',
        'If tests exist, open one and read it. A file with a single placeholder check, or tests that have been switched off, counts as none.',
      ],
      fix: [
        'I write tests around the flows that would hurt most if they broke: sign-in, who can see what, payments, and whatever your app is actually for. They run automatically on every change, so a break shows up before it ships.',
        'The point isn’t to test everything. It’s to make sure the alarm goes off for the fires that matter.',
      ],
    },
  },
  {
    slug: 'ai-with-no-guardrails',
    title: 'AI with no guardrails',
    summary: 'Every session guesses your rules again, and the code drifts apart.',
    description: 'Why an AI coding tool with no project instructions file produces seven ways of doing the same thing, and how to check for one.',
    body: {
      whatItIs: [
        'Your AI coding tool has no memory of your app. Every session starts from zero. It reads a few files, guesses how you do things, and adds a slightly different pattern: a new way to talk to the database, a second way to check who’s signed in, a third place where errors are handled differently. Do that for a few months and the app has seven ways of doing the same thing, and none of them agree.',
        'A project instructions file, a written rulebook, fixes this. It’s a plain-text file at the top level of your project, often called `CLAUDE.md`, `AGENTS.md` or `.cursorrules`, that the tool reads at the start of every session. It gives the tool the rules before it writes a line.',
      ],
      fromYourSide: [
        'Fixes that work in one screen and not another. The tool “tidying up” something you didn’t ask about. A feature that took an hour last month taking a day now, because the tool has to rediscover how everything fits. A developer who reads the code and says they can’t tell what the conventions are, because there aren’t any.',
      ],
      cost: [
        'Every session is slower and riskier than the last, and the drift is what turns a messy app into an unfixable one. When the rules for sign-in and data access live in seven places, a security fix has to be made seven times, and the eighth place gets missed. That’s how the problems on the other pages here come back after they’ve been fixed.',
      ],
      check: [
        'Open your project and look at the files at the top level, next to `package.json`. You’re looking for `CLAUDE.md`, `AGENTS.md`, `.cursorrules`, a `.cursor/rules` folder, `.windsurfrules`, or `.github/copilot-instructions.md`.',
        'If there isn’t one, the tool has been working blind. Every session so far has guessed.',
        'If there is one, open it. A useful one covers how the app is organised and where things live, naming and code conventions, how sign-in and data access must be handled, what must never change without review, and how to run the tests. A file that only says “you are a helpful assistant” doesn’t count.',
      ],
      fix: [
        'I write the rulebook for your app: how it’s organised, the conventions it actually uses, how sign-in and data access must be handled, what must never change without review, and how to run the tests. Then I bring the code in line with it, so the rules describe reality.',
        'From then on every session starts with the rules instead of a guess. It’s part of every Rescue & Refactor, and keeping it current as the app changes is what the retainer is for.',
      ],
    },
  },
];

export const PUBLISHED = FAILURE_MODES.filter((m): m is FailureMode & { body: FailureModeBody } => Boolean(m.body));

export function getFailureMode(slug: string) {
  return PUBLISHED.find((m) => m.slug === slug);
}

export function failureModePath(slug: string) {
  return `${LIBRARY_PATH}/${slug}`;
}
