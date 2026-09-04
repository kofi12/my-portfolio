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
    summary: 'Your API keys are in the page source, where anyone can read them.',
    description: 'What it means when API keys ship in your app’s front end, what it costs, and a 30-second check you can do in your browser right now.',
    body: {
      whatItIs: [
        'Your app talks to other services: a database, a payment provider, an email service, an AI model. Each one gives you a key that proves it’s you. Some keys are designed to be public. Most are not.',
        'A secret key in the browser means it’s inside the code your app sends to every visitor. Anyone can open the page, look at the source, and copy it. AI coding tools do this often, because it’s the shortest path to making a feature work.',
      ],
      fromYourSide: [
        'Usually nothing. The app works. The first sign is often a bill: an AI or email provider charging for usage you didn’t generate. Or a message from a provider saying one of your keys was found in public. Or data that changed when nobody on your team changed it.',
      ],
      cost: [
        'Someone runs up your bill on your keys. Someone reads your database with your own credentials. Someone sends email as you.',
        'Every key has to be rotated in a hurry, which means downtime while everything that used them is updated. If a key was pushed to a public repository, assume it was copied within minutes.',
      ],
      check: [
        'Open your app in Chrome and sign in the way a customer would.',
        'Press F12, or Cmd+Option+I on a Mac, to open developer tools. Click the Sources tab.',
        'Press Ctrl+Shift+F, or Cmd+Option+F on a Mac. This searches everything the page loaded, not just what’s on screen.',
        'Search for `sk_live`. Then `service_role`. Then `eyJ`.',
        '`sk_live` is a Stripe secret key. `service_role` is a database key that bypasses your access rules. Either one in the browser is a finding. `eyJ` is the start of a token. One tied to your signed-in session is normal, but one sitting in the code itself is worth asking about. Keys starting with `pk_live` or labelled `anon` are designed to be public, so on their own they’re fine.',
      ],
      checkNote: 'Not sure what you’re looking at? Screenshot it and send it with your booking. Reading it is part of the review.',
      fix: [
        'The secrets move to the server, and the browser calls your server instead of the provider directly. The server holds the keys, checks who’s asking, and does the work.',
        'Any key that was ever in the browser gets rotated, because you have to assume it was copied. The review tells you which keys are exposed, what each one can do, and what fixing it costs.',
      ],
    },
  },
  {
    slug: 'access-control',
    title: 'Access control that isn’t there',
    summary: 'One user can see or change another user’s data.',
    description: 'What missing or misconfigured access rules mean for your app, what a data leak between users costs, and a 30-second check.',
    body: {
      whatItIs: [
        'Your app stores records that belong to different people: their orders, their messages, their documents. Access control is the set of rules that says who can see and change which records. It has to live on the server or in the database, because the browser belongs to the user, and anything the browser decides can be changed by the user.',
        'AI tools often build the rule into the screen instead. The page only shows your records, so it looks right. But the request behind the page will hand over anyone’s records if you ask for them by ID. On Supabase and similar databases the rules are called row-level security, and it is common for them to be missing, or switched on with a policy that allows everything.',
      ],
      fromYourSide: [
        'Nothing, until a user tells you. A customer emails a screenshot of someone else’s order. Someone changes a URL from `/invoice/1042` to `/invoice/1041` and sees another company’s invoice. Or nobody tells you, and it shows up later in a security questionnaire, or in a complaint.',
      ],
      cost: [
        'A privacy breach, even a small one, is a conversation with a lawyer. Depending on where your users are, you may be legally required to report it. It also ends deals: an enterprise buyer who finds this in a security review won’t sign.',
        'And if the rule is missing for reading, it’s usually missing for writing too, so one user can edit or delete another’s data.',
      ],
      check: [
        'Sign in to your app and open something that belongs only to you, like an order, a project, or a profile page.',
        'Look at the address bar. If it ends in a number or an ID, change it by one and press Enter. If you have a second test account, try the same page’s address while signed in as that account instead.',
        'You should get an error or an empty page. If you see someone else’s record, that’s the finding.',
        'If your app uses Supabase, open your Supabase dashboard, go to Table Editor, and look at the tables. Each one shows whether row-level security is enabled. A table holding user data with it off, or with a policy that says `true` for everyone, is worth asking about.',
      ],
      checkNote: 'Only do this with your own test accounts. Don’t go looking at real customers’ records to prove the point.',
      fix: [
        'The rules move to where the user can’t change them: the database or the server. Every table that holds user data gets a policy that says who can read and write each row, and every request that fetches a record checks that the person asking is allowed.',
        'Then I test it with two accounts trying to reach each other’s data, and those tests stay in your codebase so the rule can’t quietly disappear later.',
      ],
    },
  },
  {
    slug: 'payment-webhooks',
    title: 'Payment webhooks nobody verifies',
    summary: 'Your app believes anything that says it’s from Stripe.',
    description: 'What an unverified payment webhook is, how people get paid features without paying, and how to check yours.',
    body: {
      whatItIs: [
        'When someone pays, Stripe doesn’t just show a success screen. It sends your server a message, called a webhook, that says the payment went through. Your app reads that message and turns on the paid feature. The message carries a signature that proves it really came from Stripe. Checking the signature is one line of code. Many AI-built apps skip it.',
        'Without the check, your server believes any message shaped like a Stripe event. Anyone who knows your webhook address can send one.',
      ],
      fromYourSide: [
        'Your dashboard shows paying customers that Stripe has no record of. Or the other way round: Stripe has the payment, but the customer never got access, because the message was handled wrong and nobody noticed. Either way the first sign is a support email.',
      ],
      cost: [
        'People get paid features without paying, and you can’t tell which ones. Refund disputes get messy because your records and Stripe’s disagree. If the webhook also handles cancellations, a forged one can cut off a paying customer.',
      ],
      check: [
        'Open your Stripe dashboard. Go to Developers, then Webhooks. You should see at least one endpoint pointing at your app’s address. If there are none, your app may be relying on the browser’s success screen alone, which anyone can fake.',
        'Click the endpoint. Stripe shows a signing secret for it, starting with `whsec_`. Note whether it’s there.',
        'Now check your app’s settings, wherever you keep environment variables: your hosting dashboard, or your AI tool’s settings page. If there’s no variable holding a `whsec_` value, your app has nothing to check the signature with.',
        'Also look at the endpoint’s recent deliveries in Stripe. A long list of failed deliveries means messages are being sent and your app isn’t handling them.',
      ],
      checkNote: 'Reading these pages is safe. Don’t regenerate or delete anything while you look.',
      fix: [
        'Every incoming webhook is checked against the signing secret before anything else happens, and anything that fails the check is rejected. The handler is made safe to receive the same message twice, because Stripe will resend. Access is granted from the verified message, never from the success screen.',
        'I test it with a forged message and a replayed one.',
      ],
    },
  },
  {
    slug: 'input-validation',
    title: 'No input validation',
    summary: 'Your app accepts whatever it’s sent, including things that break it.',
    description: 'What input validation is, what corrupted data and injection cost, and a safe 30-second check.',
    body: {
      whatItIs: [
        'Every form field and every request your app receives is something a person typed, or something a program sent. Validation is the step where the app checks it before using it: is the email actually an email, is the quantity a whole number, is the text short enough, is this field even supposed to be set by the user.',
        'AI tools tend to write the happy path. The field expects a number, so the code assumes it got one. When it gets something else, the best case is a crash. The worse cases are data that’s wrong from then on, or input that gets treated as an instruction, which is how injection attacks work.',
      ],
      fromYourSide: [
        'Odd records: a customer with a blank name, an order for negative three items, a date in the year 20233. Pages that crash for one specific user. Or a field that was only meant for admins, like `role` or `price`, that turns out to be editable from the sign-up form.',
      ],
      cost: [
        'Corrupted data is expensive because it spreads. A wrong price on one order feeds into reports, invoices and refunds. A missing check on a hidden field can let a user make themselves an admin or set their own price. And unvalidated input reaching your database is the classic way attackers read or destroy it.',
      ],
      check: [
        'Open a form in your app, any one that saves something. Try a few wrong answers: letters in a number field, a negative quantity, a date that doesn’t exist, a very long piece of text pasted into a short field. Submit.',
        'You should see a clear error and nothing saved. If the app saves it, crashes, or shows a blank screen, that’s the finding.',
        'Open your sign-up or profile page and press F12 to open developer tools, then click the Network tab. Save the form and click the request that appears. Look at the payload it sent. If you see fields you never typed, like `role`, `plan`, `credits` or `is_admin`, the server may be accepting whatever the browser sends for them.',
      ],
      checkNote: 'Use a test account. Wrong data in a real customer’s record is exactly what you’re trying to avoid.',
      fix: [
        'Every request gets a schema: a definition of what fields are allowed, what type each one is, and what range it can take. Anything outside the schema is rejected with a clear message before it touches the database. Fields the user shouldn’t control are removed from the request entirely.',
        'Database queries use parameters instead of pasted-in text, which closes the injection path. The schema lives next to the code, so the next AI session sees it too.',
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
        'Things fail. A save times out, an email bounces, a payment provider is down for a minute. Error handling is what your app does next: tell the user, retry, log it so you can see it later. A silent failure is when the code catches the error and does nothing. The user sees a spinner that stops, or a success message for something that didn’t happen.',
        'AI tools produce this constantly. An empty `catch` block makes the red error go away, which looks like fixing it.',
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
        'Every place the code swallows an error gets a real decision: show the user, retry, or fail loudly. Failures are sent to an error-reporting service so you see them before customers do, with enough detail to know which user and which action.',
        'The core flows get tests that check what happens when a dependency fails, not just when it works.',
      ],
    },
  },
  {
    slug: 'queries-under-load',
    title: 'Queries that die under load',
    summary: 'Fine with ten users. Timeouts with a thousand.',
    description: 'Why an app that works today slows to a crawl at launch, what it costs, and a 30-second check.',
    body: {
      whatItIs: [
        'When your app looks something up, the database has to find it. With ten records it can read everything and it’s instant. With a hundred thousand, reading everything for every request is what makes a page take eight seconds, then time out. An index is the database’s way of finding a record without reading everything. AI tools rarely add them, because the app is fast while it’s being built.',
        'The same goes for queries that fetch far more than the page needs: loading every order to show the latest five, or asking the database once per row in a list.',
      ],
      fromYourSide: [
        'The app was fast and now it isn’t. Dashboards that take longer every month. A launch day where sign-ups spike and everything slows down at once. Timeouts that come and go. A hosting bill that climbs because the database is working far harder than it should.',
      ],
      cost: [
        'A slow app during your launch is the launch. People who hit a timeout on sign-up don’t come back. And the fix people reach for under pressure, a bigger database plan, is expensive and doesn’t fix the cause. The real fix is usually a few indexes and a few rewritten queries, but you need to know which ones.',
      ],
      check: [
        'Open the page in your app that shows the longest list: orders, users, messages. Note how long it takes to load. Then open the same page for the account with the most data, if you have one.',
        'If you use Supabase, open the dashboard and look for Query Performance under Advisors, or the Database section under Reports. It lists the slowest queries and suggests missing indexes. Anything described as a sequential scan on a large table is worth asking about.',
        'If you don’t use Supabase, your hosting dashboard usually has a database metrics page. Look at how load and response time have changed over the last month.',
      ],
      checkNote: 'This is read-only. Don’t run anything from these pages while you’re looking.',
      fix: [
        'I find the queries that actually run on your busiest pages, add the indexes they need, and rewrite the ones that fetch too much or run in loops.',
        'Then I load-test the core flow with realistic numbers so you know where the next limit is, and note it in the report.',
      ],
    },
  },
  {
    slug: 'dependencies',
    title: 'Dependencies that don’t exist or shouldn’t',
    summary: 'Packages the AI invented, or ones nobody maintains.',
    description: 'What hallucinated and abandoned packages mean for your app, what they cost, and how to check for them.',
    body: {
      whatItIs: [
        'Your app is built on packages: libraries other people wrote, pulled in by name. AI tools sometimes invent a package name that sounds right but doesn’t exist, and sometimes pick one that exists but was abandoned years ago, or one with a known security hole. Attackers know this. They register the invented names and fill them with malicious code, so the next person whose tool remembers the name installs it.',
        'Even real, well-kept packages need updating. A dependency with a published vulnerability is an open door with a public map to it.',
      ],
      fromYourSide: [
        'Install steps that fail with “package not found”. Warnings during builds that everyone ignores. A security questionnaire asking how you track vulnerable dependencies, and no answer. Or nothing at all, until a provider or a customer’s scanner flags it.',
      ],
      cost: [
        'A malicious package runs with all the access your app has: your database, your keys, your users’ data. An abandoned one means the next security fix never comes. A known vulnerability means you’re relying on nobody bothering to try it. Enterprise buyers ask about this directly, and “we don’t know” fails the questionnaire.',
      ],
      check: [
        'If your code is on GitHub, open the repository and click the Security tab, then Dependabot alerts. If alerts are on, you’ll see a list of known vulnerabilities in your dependencies with a severity for each. If it says alerts are off, turn them on. It’s one click and it’s free.',
        'Open the file called `package.json` in your repository, or `requirements.txt` for a Python app. Pick two or three package names you don’t recognise and search for each on npmjs.com or pypi.org. Check when it was last published and how many people use it. A package with no page, or one last updated years ago, is worth asking about.',
      ],
      checkNote: 'Looking is safe. Don’t click “update all” from any dashboard. A careless upgrade can break the app in ways that are hard to trace.',
      fix: [
        'Every dependency gets checked against the vulnerability databases and against what it actually does in your app. Invented or abandoned packages are replaced. Known vulnerabilities are patched and the app is retested.',
        'Then an automated check runs on every change so the list can’t drift again, and the report tells you which packages matter and which are noise.',
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
        'Slow, nervous shipping. Regressions that reach customers. A developer you hire later who can’t change anything safely, because nothing tells them what they broke. And it compounds: the longer an app goes without tests, the more expensive the first ones are to write.',
      ],
      check: [
        'Open your repository on GitHub. Look for a folder called `tests`, `test`, `__tests__` or `spec`, or files whose names end in `.test.ts`, `.test.js` or `_test.py`. If there are none, the app has no smoke alarm.',
        'Click the Actions tab. If it’s empty, nothing runs automatically when the code changes. If there are runs, open the most recent one and see whether it actually ran tests or only built the app.',
        'If tests exist, open one and read it. A file with a single placeholder check, or tests that have been commented out, counts as none.',
      ],
      fix: [
        'I write tests around the flows that would hurt most if they broke: sign-in, access rules, payments, and whatever your app is actually for. They run automatically on every change, so a break shows up before it ships.',
        'The point isn’t to test everything. It’s to make sure the alarm goes off for the fires that matter.',
      ],
    },
  },
  {
    slug: 'ai-with-no-guardrails',
    title: 'AI with no guardrails',
    summary: 'Every session re-guesses your conventions, and the codebase drifts.',
    description: 'Why an AI coding tool with no project instructions file produces seven ways of doing the same thing, and how to check for one.',
    body: {
      whatItIs: [
        'Your AI coding tool has no memory of your app. Every session starts from zero. It reads a few files, guesses how you do things, and adds a slightly different pattern: a new way to talk to the database, a second way to check who’s signed in, a third place where errors are handled differently. Do that for a few months and the codebase has seven ways of doing the same thing, and none of them agree.',
        'A project instructions file fixes this. It’s a plain-text file in the root of your project, often called `CLAUDE.md`, `AGENTS.md` or `.cursorrules`, that the tool reads at the start of every session. It gives the tool the rules before it writes a line.',
      ],
      fromYourSide: [
        'Fixes that work in one screen and not another. The tool “refactoring” something you didn’t ask about. A feature that took an hour last month taking a day now, because the tool has to rediscover how everything fits. A developer who reads the code and says they can’t tell what the conventions are, because there aren’t any.',
      ],
      cost: [
        'Every session is slower and riskier than the last, and the drift is what turns a messy app into an unfixable one. When the rules for sign-in and data access live in seven places, a security fix has to be made seven times, and the eighth place gets missed. That’s how the problems on the other pages here come back after they’ve been fixed.',
      ],
      check: [
        'Open your repository and look at the files in the root folder, next to `package.json`. You’re looking for `CLAUDE.md`, `AGENTS.md`, `.cursorrules`, a `.cursor/rules` folder, `.windsurfrules`, or `.github/copilot-instructions.md`.',
        'If there isn’t one, the tool has been working blind. Every session so far has guessed.',
        'If there is one, open it. A useful one covers the architecture and folder layout, naming and code conventions, how sign-in and data access must be handled, what must never change without review, and how to run the tests. A file that only says “you are a helpful assistant” doesn’t count.',
      ],
      fix: [
        'I write the instructions file for your codebase: how it’s laid out, the conventions it actually uses, how sign-in and data access must be handled, what must never change without review, and how to run the tests. Then I bring the code in line with it, so the rules describe reality.',
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
