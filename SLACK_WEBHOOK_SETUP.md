# Slack Webhook Setup for Contact Form

## Setup Instructions

1. **Create a Slack App**
   - Go to https://api.slack.com/apps
   - Click "Create New App"
   - Choose "From scratch"
   - Name your app (e.g., "Portfolio Contact Form")
   - Select your Slack workspace

2. **Enable Incoming Webhooks**
   - In your app settings, go to "Incoming Webhooks"
   - Toggle "Activate Incoming Webhooks" to ON
   - Click "Add New Webhook to Workspace"
   - Select the channel where you want to receive contact form submissions
   - Click "Allow"

3. **Get Your Webhook URL**
   - Copy the webhook URL (starts with `https://hooks.slack.com/services/...`)
   - It should look like: `https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX`

4. **Update the Code**
   - Open `src/app/api/contact/route.ts`
   - Find the line: `const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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';`
   - Replace this URL with your actual webhook URL from step 3

## Example Message Format

When someone submits the contact form, you'll receive a formatted message in Slack with:
- Contact person's name
- Their email address
- Project message
- Submission timestamp

## Testing

After updating the webhook URL, test the contact form to ensure messages are being delivered to your Slack channel.

## Security & Architecture Notes

- **Server-Side Processing**: The form now uses a Next.js API route (`/api/contact`) to handle Slack webhook calls server-side, avoiding CORS issues
- **Input Validation**: The API route validates and sanitizes all form inputs before sending to Slack
- **Email Validation**: Proper email format validation is performed server-side
- **Error Handling**: Comprehensive error handling for both client and server-side errors
- **Security**: Keep your webhook URL secure and don't commit it to public repositories
- **Production**: Consider using environment variables for the webhook URL in production deployments

## Architecture
1. User submits form → 2. Next.js API route → 3. Slack webhook → 4. Your Slack channel
